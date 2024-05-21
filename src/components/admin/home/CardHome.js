import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_SAN_PHAM } from '../../../redux/saga/types/sanPham.types';

export default function CardHome() {
    const dispatch = useDispatch();
    const listUser = useSelector(state => state.NguoiDungReducer.listUser);
    const listSanPham = useSelector(state => state.DonHangReducerSaga.listSanPham);
    const listDonHang = useSelector(state => state.DonHangReducerSaga.listDonHang);
    useEffect(() => {
        dispatch({ type: GET_ALL_SAN_PHAM });
        dispatch({ type: "GET_ALL_DON_HANG" });
        dispatch({ type: "GET_ALL_USER" });
    }, []);
    const totalUser = listUser?.reduce((curr, acc) => {
        return curr + 1;
    }, 0);
    const totalSanPham = listSanPham?.reduce((curr, acc) => {
        return curr + 1;
    }, 0);
    const totalDonHang = listDonHang?.reduce((curr, acc) => {
        return curr + 1;
    }, 0);
    return (
        <div className='row p-4'>
            <div className='col-4'>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex justify-content-center align-items-center bg-info" >
                            <i class="fa-solid fa-user text-white" style={{ fontSize: "40px" }}></i>
                        </div>
                        <div className="col-md-8 text-center">
                            <div className="card-body">
                                <h5 className="card-title"> Người dùng</h5>
                                <p className="card-text" style={{ fontSize: "40px", textAlign: 'center', fontWeight: "bold" }}>{totalUser}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex justify-content-center align-items-center bg-warning" >
                            <i class="fa-solid fa-box text-white" style={{ fontSize: "40px" }}></i>
                        </div>
                        <div className="col-md-8 text-center">
                            <div className="card-body">
                                <h5 className="card-title"> Sản phẩm</h5>
                                <p className="card-text" style={{ fontSize: "40px", textAlign: 'center', fontWeight: "bold" }}>{totalSanPham}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex justify-content-center align-items-center bg-success" >
                            <i class="fa-solid fa-box text-white" style={{ fontSize: "40px" }}></i>
                        </div>
                        <div className="col-md-8 text-center">
                            <div className="card-body">
                                <h5 className="card-title"> Đơn hàng</h5>
                                <p className="card-text" style={{ fontSize: "40px", textAlign: 'center', fontWeight: "bold" }}>{totalDonHang}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
