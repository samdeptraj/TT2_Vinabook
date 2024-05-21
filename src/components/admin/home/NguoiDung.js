import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalUpdateUser from './modal/ModalUpdateUser';
import excelExport from '../../../utils/ExcelExport';
import { Alert, Button, Input, Popconfirm, Space, Table, Tag, message } from 'antd';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import moment from 'moment';
import { NotifyCRUD } from '../../globalSetting/notify/AlertCRUD';
export default function NguoiDung() {
    const dispatch = useDispatch();
    const { listUser } = useSelector(state => state.NguoiDungReducer);
    const { notifyData } = useSelector(state => state.NotifyReducer);
    const [emailSearch, setEmailSearch] = useState("");
    const [emailSearched, setEmailSearched] = useState([]);
    const searchInput = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    useEffect(() => {
        dispatch({
            type: "GET_ALL_USER"
        })
    }, [])
    const handleUpdate = (user) => {
        dispatch({
            type: 'UPDATE_USER_RDC',
            data: user
        })
        dispatch({
            type: 'EDIT_NGUOI_DUNG_RDC',
            data: true
        })
    }
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_USER",
            data: id
        })
    }
    const handleExportXLXS = () => {
        excelExport.exportToExcel(listUser, "Danh_sach_nguoi_dung")
    }
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: () => (
            <i className="fa-solid fa-magnifying-glass" style={{ fontSize: "15px" }}></i>
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: {
                compare: (a, b) => a.id - b.id,
            },
        },
        {
            title: 'Họ & tên',
            dataIndex: 'ho',
            key: 'tenSp',
            width: '20%',
            render: (_, record) => {
                return <>{record.ho} {record.ten}</>
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '30%',
            ...getColumnSearchProps('email'),
            sorter: {
                compare: (a, b) => a.email.localeCompare(b.email),

            },
        },
        {
            title: 'Quyền hạn',
            dataIndex: 'quyenHan',
            render: (quyenHan) => {
                return <>{quyenHan === "admin" ? <Tag color='red'>{quyenHan}</Tag> : quyenHan}</>
            }
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            sorter: {
                compare: (a, b) => a.createdAt.localeCompare(b.createdAt),

            },
            ...getColumnSearchProps('createdAt'),
            render: (createdAt) => {
                return <>{moment(createdAt).utcOffset(7).format('DD-MM-YYYY / HH:mm:ss')}</>
            }
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (user, record) => {

                return (
                    <Space >
                        <Button type="primary" onClick={() => handleUpdate(user)}><i class="fa-solid fa-pen-to-square"></i></Button>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => handleDelete(record.id)}
                            icon={
                                <QuestionCircleOutlined
                                    style={{
                                        color: 'red',
                                    }}
                                />
                            }
                        >
                            <Button type="primary" danger><i class="fa-solid fa-trash-can" ></i></Button>
                        </Popconfirm>
                    </Space>
                )
            },
        },
    ];
    return (
        <div className='container-fluid'>
            <ModalUpdateUser />
            {NotifyCRUD(notifyData)}
            <div className='w-100 text-right mb-2 mt-2 p-2' style={{ backgroundColor: "#FAFAFA" }}>
                <button className='btn btn-success' onClick={handleExportXLXS} ><i class="fa-solid fa-file-excel mr-1"></i>Xuất Excel</button>
            </div>
            <Table columns={columns} dataSource={listUser} />
        </div>
    )
}