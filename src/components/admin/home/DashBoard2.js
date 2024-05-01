import React from 'react'
import CardHome from './CardHome'
import SanPham from './SanPham'
import NguoiDung from './NguoiDung'
import DanhMuc from './DanhMuc'
import ChiTietSP from './ChiTietSP'
import DonHang from './DonHang'

export default function DashBoard2() {
    return (
        <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active " id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab"><CardHome /></div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><SanPham /></div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><NguoiDung /></div>
            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><DanhMuc /></div>
            <div className="tab-pane fade" id="v-pills-details" role="tabpanel" aria-labelledby="v-pills-details-tab"><ChiTietSP /></div>
            <div className="tab-pane fade" id="v-pills-donhang" role="tabpanel" aria-labelledby="v-pills-donhang-tab"><DonHang /></div>
        </div>
    )
}
