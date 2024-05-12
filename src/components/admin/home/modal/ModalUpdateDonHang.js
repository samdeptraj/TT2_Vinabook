import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ModalUpdateDonHang() {
    const [status, setStatus] = useState();
    const dispatch = useDispatch();
    const maDonHang = useSelector(state => state.DonHangReducerSaga.maDonHang);

    const handleChangeOption = (e) => {
        const { value } = e.target;
        console.log('value: ', value);
        setStatus(value);
    }
    const handleSave = () => {
        dispatch({
            type: "UPDATE_DON_HANG",
            data: { maDonHang, status }
        })
    }
    return (
        <div>
            <div className="modal fade" id="updateDonHang" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <label class="input-group-text" for="inputGroupSelect02">Trạng thái</label>
                                </div>
                                <select className='custom-select' onChange={handleChangeOption}>
                                    <option selected >Choose...</option>
                                    <option value={"Chờ xác nhận"}>Chờ xác nhận</option>
                                    <option value={"Đang giao hàng"}>Đang giao hàng</option>
                                    <option value={"Đã giao"}>Đã giao</option>
                                    <option value={"Đã hủy"}>Đã hủy</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>Lưu thay đổi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
