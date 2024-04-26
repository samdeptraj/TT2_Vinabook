import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ModalUpdateSP() {
    const sanPhamUpdate = useSelector(state => state.ProductsReducer.sanPhamUpdate);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        value: {
            tenSp: "",
            giaGoc: "",
            giaSale: "",
        }
    })
    useEffect(() => {
        setState({
            value: {
                ...state.value,
                tenSp: sanPhamUpdate.tenSp,
                giaGoc: sanPhamUpdate.giaGoc,
                giaSale: sanPhamUpdate.giaSale
            }
        })
    }, [sanPhamUpdate])
    const [file, setFile] = useState("");
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
    const handleChangeImg = (file) => {
        console.log(file);
        setFile(file);
    }
    const updateSP = () => {
        const id = sanPhamUpdate.id;
        let formData = new FormData();
        formData.append("image", file);
        formData.append("tenSp", state.value.tenSp);
        formData.append("giaGoc", state.value.giaGoc);
        formData.append("giaSale", state.value.giaSale);
        dispatch({
            type: "UPDATE_SANPHAM",
            data: { formData, id }
        })
    }
    return (
        <div>

            {/* Modal */}
            <div className="modal fade" id="modalUpdateSP" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content " style={{ width: '600px' }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cập nhập sản phẩm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="/" method="post" enctype="multipart/form-data">
                                <div className="form-group row">
                                    <label htmlFor="tenSp" className="col-sm-3 col-form-label">Tên sản phẩm</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='tenSp' id="tenSp" onChange={changeInput} value={state.value.tenSp} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="giaGoc" className="col-sm-3 col-form-label">Hình ảnh</label>
                                    <div className="col-sm-9">
                                        <input type="file" name="image" onChange={(e) => handleChangeImg(e.target.files[0])} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="giaGoc" className="col-sm-3 col-form-label">Giá gốc</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='giaGoc' id="giaGoc" onChange={changeInput} value={state.value.giaGoc} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="giaSale" className="col-sm-3 col-form-label">Giá Sale</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='giaSale' id="giaSale" onChange={changeInput} value={state.value.giaSale} />
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => updateSP()}>Update</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}
