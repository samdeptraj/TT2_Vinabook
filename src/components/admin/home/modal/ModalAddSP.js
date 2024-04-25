import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CREATE_SAN_PHAM } from '../../../../redux/saga/types/sanPham.types';

export default function ModalAddSP() {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        value: {
            tenSp: "",
            giaGoc: "",
            giaSale: ""
        }
    })
    const changeInput = (e) => {
        const { name, value } = e.target;
        const newValue = {
            ...state.value,
            [name]: value
        }
        console.log('newValue: ', newValue);
        setState(
            {
                value: newValue
            }
        )
    }
    const addSp = () => {
        console.log('okkkkkkkkkk');
        dispatch({
            type: CREATE_SAN_PHAM,
            data: state.value
        })
    }
    return (
        <div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content " style={{ width: '600px' }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thêm mới sản phẩm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="/" method="post" enctype="multipart/form-data">
                                <div className="form-group row">
                                    <label htmlFor="tenSp" className="col-sm-3 col-form-label">Tên sản phẩm</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='tenSp' id="tenSp" onChange={changeInput} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="giaGoc" className="col-sm-3 col-form-label">Giá gốc</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='giaGoc' id="giaGoc" onChange={changeInput} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="giaSale" className="col-sm-3 col-form-label">Giá Sale</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='giaSale' id="giaSale" onChange={changeInput} />
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => addSp()}>Thêm</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}
