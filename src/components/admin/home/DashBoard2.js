import React from 'react'
import CardHome from './CardHome'
import DonHang from './DonHang'
import NguoiDung from './NguoiDung'
import DanhMuc from './DanhMuc'

export default function DashBoard2() {
    return (
        <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <CardHome />
            </div>
            <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><DonHang /></div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><NguoiDung/></div>
            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><DanhMuc/></div>
        </div>
    )
}
