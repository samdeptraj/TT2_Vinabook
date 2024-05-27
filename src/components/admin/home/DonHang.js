import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import ModalUpdateDonHang from './modal/ModalUpdateDonHang';
import excelExport from '../../../utils/ExcelExport';
import { SearchOutlined, FileExcelOutlined, QuestionCircleOutlined, EyeOutlined } from '@ant-design/icons';
import { Alert, Button, Input, Popconfirm, Popover, Space, Table, Tag, message } from 'antd';
import { NotifyCRUD } from '../../globalSetting/notify/AlertCRUD';
import Highlighter from 'react-highlight-words';
import moment from 'moment';

export default function DonHang() {
    const dispatch = useDispatch();
    const { notifyData } = useSelector(state => state.NotifyReducer);
    const searchInput = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const listDonHang = useSelector(state => state.DonHangReducerSaga.listDonHang);
    console.log('listDonHang: ', listDonHang);

    const handleUpdate = (donHang) => {
        dispatch({
            type: "UPDATE_DON_HANG_RDC",
            data: donHang
        })
        dispatch({
            type: "EDIT_DON_HANG_RDC",
            data: true
        })
    }
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_DON_HANG",
            data: id
        })
    }
    const handleExportXLXS = () => {
        excelExport.exportToExcel(listDonHang, "Danh_sach_san_pham")
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'tenSp',
            key: 'tenSp',
            ...getColumnSearchProps('tenSp'),
            sorter: {
                compare: (a, b) => a.tenSp.localeCompare(b.tenSp),
            },
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            width: '12%',
            render: (image) => {
                return <img src={image} alt='/#' style={{ width: "100%" }} />
            }
        },
        {
            title: 'Địa chỉ giao',
            dataIndex: 'diaChi',
            width: '12%',
            render: (item, record) => {
                console.log('record: ', record);
                return <p>{item},{record.phuongXa},{record.quanHuyen}</p>
            }
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            sorter: {
                compare: (a, b) => a.createdAt - b.createdAt,
                multiple: 1,
            },
            render: (createdAt) => moment(createdAt).format('DD/MM/YYYY | HH:mm:ss'),
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (status) => {
                if (status === "Chờ xác nhận") {
                    return <Tag color='blue'>{status}</Tag>
                } else if (status === "Đang giao hàng") {
                    return <Tag color='orange' style={{ color: "black" }}>{status}</Tag>
                } else if (status === "Đã giao") {
                    return <Tag color='green'>{status}</Tag>
                }
                else if (status === "Đã hủy") {
                    return <Tag color='red'>{status}</Tag>
                }
                return <Tag color='green'>{status}</Tag>
            },
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (donHang, record) => {
                return (
                    <Space >
                        <Button type="primary" onClick={() => handleUpdate(donHang)}><i class="fa-solid fa-pen-to-square"></i></Button>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => handleDelete(donHang.id)}
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
            <ModalUpdateDonHang />
            {NotifyCRUD(notifyData)}
            <div className='w-100 text-right mb-2 mt-2 p-2' style={{ backgroundColor: "#FAFAFA" }}>
                <button className='btn btn-success' onClick={handleExportXLXS} ><i class="fa-solid fa-file-excel mr-1"></i>Xuất Excel</button>
            </div>
            <Table columns={columns} dataSource={listDonHang} />
        </div>
    )
}
