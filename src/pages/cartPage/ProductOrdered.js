import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
const moment = require('moment');
export default function ProductOrdered() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const decodeToken = jwtDecode(token);
    const listDonHangCuaToi = useSelector(state => state.DonHangReducerSaga.listDonHangCuaToi)
    console.log('listDonHangCuaToi: ', listDonHangCuaToi);
    useEffect(() => {
        dispatch({
            type: "GET_ALL_DON_HANG_CUA_TOI",
            data: decodeToken.maNguoiDung
        })
    }, [dispatch])
    const renderChoXacNhan = () => {
        return listDonHangCuaToi.map(item => {
            if (item.status === "Chờ xác nhận") {
                return <tr>
                    <th>{item.maHoaDon}</th>
                    <td>{item.tenSp.length < 25 ? item.tenSp : item.tenSp.slice(0, 30) + "..."}</td>
                    <td style={{width: "100px"}}><img src={item.image} alt="" style={{width:'100%'}}/></td>
                    <td>{Number(item.giaSale?item.giaSale:item.giaGoc).toLocaleString()} đ</td>
                    <td>{moment(item.createAt).format('DD/MM/YYYY HH:mm:ss')}</td>
                    <td className=''><p className='bg-info text-white text-center'>{item.status}</p></td>
                </tr>
            }
        })
    }
    return (
        <div className='container mt-5 mb-5'>
            <h5 className='mb-4'>Quản lý đơn hàng</h5>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active btn" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Đang chờ duyệt</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link btn" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Đang giao hàng</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link btn" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Đã giao</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <table class="table">
                        <thead>
                            <tr className='bg-light'>
                                <th scope="col">Mã đơn</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">hình ảnh</th>
                                <th scope="col">giá tiền</th>
                                <th scope="col">ngày đặt</th>
                                <th scope="col">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderChoXacNhan()}
                        </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
        </div>
    )
}
