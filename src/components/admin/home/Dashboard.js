import React from 'react'
export default function Dashboard() {
    return (
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div style={{ width: '100%',padding:'20px', margin: '0 auto' }} >
                <img style={{ width: '100%'}} src={require('../../../assets/images/logo_vinabook.png')} alt='' />
            </div>
            <div className="nav-link btn active text-left" id="v-pills-dashboard-tab" data-toggle="pill" data-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="false">Trang chủ</div>
            <div className="nav-link btn text-left" id="v-pills-profile-tab" data-toggle="pill" data-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Sản phẩm</div>
            <div className="nav-link btn text-left" id="v-pills-messages-tab" data-toggle="pill" data-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Người dùng</div>
            <div className="nav-link btn text-left" id="v-pills-settings-tab" data-toggle="pill" data-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Danh mục sản phẩm</div>
            <div className="nav-link btn text-left" id="v-pills-details-tab" data-toggle="pill" data-target="#v-pills-details" type="button" role="tab" aria-controls="v-pills-details" aria-selected="false">Chi tiết sản phẩm</div>
            <div className="nav-link btn text-left" id="v-pills-donhang-tab" data-toggle="pill" data-target="#v-pills-donhang" type="button" role="tab" aria-controls="v-pills-donhang" aria-selected="false">Đơn hàng</div>
        </div>
    )
}
