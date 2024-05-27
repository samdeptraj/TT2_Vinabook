import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_SAN_PHAM } from '../../../redux/saga/types/sanPham.types';
import ModalUpdateSP from './modal/ModalUpdateSP';
import excelExport from '../../../utils/ExcelExport';
import { SearchOutlined, FileExcelOutlined, QuestionCircleOutlined, EyeOutlined } from '@ant-design/icons';
import { Alert, Button, Input, Popconfirm, Popover, Space, Table, Tag, message } from 'antd';
import Highlighter from 'react-highlight-words';
import { NotifyCRUD } from '../../globalSetting/notify/AlertCRUD';
import { Link } from 'react-router-dom';
import { ROUTERS_ADMIN } from '../../../utils/router';
import { LocationGetHeader } from '../../globalSetting/Location/LocationGetHeader';
export default function SanPham() {
    const dispatch = useDispatch();
    const { listSanPham, listSanPhamYetDetail } = useSelector(state => state.DonHangReducerSaga);
    const { notifyData } = useSelector(state => state.NotifyReducer);
    const searchInput = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    useEffect(() => {
        dispatch({
            type: GET_ALL_SAN_PHAM
        });
        dispatch({ type: "GET_SAN_PHAM_YET_DETAIL" })

    }, [dispatch]);

    const handleUpdate = (sanPham) => {
        dispatch({
            type: "UPDATE_SANPHAM_RDC",
            data: sanPham
        })
        dispatch({
            type: "EDIT_SAN_PHAM_RDC",
            data: true
        })
    }
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_SAN_PHAM",
            data: id
        })
    }
    const handleViewDetaiLSp = (tenSp) => {
        dispatch({
            type: "SAN_PHAM_GET_ONE_DETAIL",
            data: tenSp
        });
    }
    const handleExportXLXS = () => {
        excelExport.exportToExcel(listSanPham, "Danh_sach_san_pham")
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
            title: 'Tên sản phẩm',
            dataIndex: 'tenSp',
            key: 'tenSp',
            width: '40%',
            ...getColumnSearchProps('tenSp'),
            sorter: {
                compare: (a, b) => a.tenSp.localeCompare(b.tenSp),
            },
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            width: '12%',
            render: (text) => {
                return <img src={text} alt='/#' style={{ width: "100%" }} />
            }
        },
        {
            title: 'Giá gốc',
            dataIndex: 'giaGoc',
            sorter: {
                compare: (a, b) => a.giaGoc - b.giaGoc,
                multiple: 1,
            },
            render: (giaGoc) => Number(giaGoc).toLocaleString(),
        },
        {
            title: 'Giá sale',
            dataIndex: 'giaSale',
            sorter: {
                compare: (a, b) => a.giaSale - b.giaSale,
                multiple: 1,
            },
            render: (giaSale) => <Tag color='green'>{Number(giaSale).toLocaleString()}</Tag>,
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (sanPham, record) => {
                const sanPhamYetDetail = listSanPhamYetDetail.some(item => {
                    return item.tenSp === sanPham.tenSp
                });
                const linkPath = sanPhamYetDetail
                    ? `${ROUTERS_ADMIN.ADD_CHITIET_SP}?tenSp=${encodeURIComponent(sanPham.tenSp)}`
                    : `${ROUTERS_ADMIN.CHITIET_SP}?tenSp=${encodeURIComponent(sanPham.tenSp)}`

                return (
                    <Space >
                        <Button type="primary" onClick={() => handleUpdate(sanPham)}><i class="fa-solid fa-pen-to-square"></i></Button>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => handleDelete(sanPham.id)}
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
                        <Popover placement="topLeft" content={sanPhamYetDetail ? "Thêm chi tiết sản phẩm" : "Xem chi tiết sản phẩm"}>
                            <Link to={linkPath} >
                                <Button type='primary'> {sanPhamYetDetail ? <i class="fa-solid fa-file-circle-plus"></i> : <i class="fa-solid fa-eye"></i>}</Button>
                            </Link>
                        </Popover>
                    </Space>
                )
            },
        },
    ];
    return (
        <div className='container-fluid'>
            <ModalUpdateSP />
            {NotifyCRUD(notifyData)}
            <div className='w-100 text-right mb-2 mt-2 p-2' style={{ backgroundColor: "#FAFAFA" }}>
                <button className='btn btn-success' onClick={handleExportXLXS} ><i class="fa-solid fa-file-excel mr-1"></i>Xuất Excel</button>
            </div>
            <Table columns={columns} dataSource={listSanPham} />
        </div>
    )
}
