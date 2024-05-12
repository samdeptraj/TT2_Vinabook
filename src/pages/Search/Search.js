import React from 'react'
import { useSelector } from 'react-redux'
import { ROUTERS } from '../../utils/router';
import { Link } from 'react-router-dom';

export default function Search() {
    const listSanPhamUser = useSelector(state => state.DonHangReducerSaga.listSanPhamUser);
    console.log('listSanPhamUser: ', listSanPhamUser);
    const renderListSp = () => {
        return listSanPhamUser.map(item => {
            return <div className="col-3 p-2">
                <Link
                    to={`/${ROUTERS.DETAIL}?tenSp=${encodeURIComponent(item.tenSp)}`}
                    className="myHotSaleBook-link"
                    style={{textDecoration:"none"}}
                >
                    <div
                        className="card mb-3 p-3"
                        style={{ maxWidth: 540, height: "250px" }}
                    >
                        <div className="row no-gutters" style={{height:'200px'}}>
                            <div className="col-md-4">
                                <img className="w-100" src={item.image} alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body myCard-body">
                                    <div className="myCard-body--border">
                                        <h6 className="card-title text-dark">
                                            {item.tenSp}
                                        </h6>
                                        <p className="card-text pb-2">{item.tacGia}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mySale">
                            <p id="boxSaleOf">{Math.round(((Number(item.giaGoc) - Number(item.giaSale)) / Number(item.giaGoc)) * 100)}%</p>
                            <div className="mySale-price-container">
                                <p className="mySale-price">{Number(item.giaGoc).toLocaleString()} ₫</p>
                                <p className="mySale-price-sale">{Number(item.giaSale).toLocaleString()} ₫</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        })

    }
    return (
        <div className='container mt-5 b-5'>
            <h3>Tìm kiếm</h3>
            <div className='mb-5 row'>
                {renderListSp()}
            </div>
        </div>
    )
}
