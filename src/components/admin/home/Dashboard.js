import React from 'react'
export default function Dashboard() {
    return (
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div style={{ width: '40%', margin: '0 auto' }} >
                <img style={{ width: '100%' }} src='https://png.pngtree.com/png-clipart/20230824/original/pngtree-boy-avatar-in-round-web-button-isolated-on-white-picture-image_8377276.png' alt='' />
            </div>
            <div className="nav-link btn active text-left" id="v-pills-dashboard-tab" data-toggle="pill" data-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="false">Dashboard</div>
            <div className="nav-link btn text-left" id="v-pills-profile-tab" data-toggle="pill" data-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Sản phẩm</div>
            <div className="nav-link btn text-left" id="v-pills-messages-tab" data-toggle="pill" data-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Người dùng</div>
            <div className="nav-link btn text-left" id="v-pills-settings-tab" data-toggle="pill" data-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Danh mục sản phẩm</div>
            <div className="nav-link btn text-left" id="v-pills-details-tab" data-toggle="pill" data-target="#v-pills-details" type="button" role="tab" aria-controls="v-pills-details" aria-selected="false">Chi tiết sản phẩm</div>
            <div className="nav-link btn text-left" id="v-pills-donhang-tab" data-toggle="pill" data-target="#v-pills-donhang" type="button" role="tab" aria-controls="v-pills-donhang" aria-selected="false">Đơn hàng</div>
        </div>
    )
}
