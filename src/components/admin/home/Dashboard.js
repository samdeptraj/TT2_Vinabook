import { Layout } from 'antd';
import React from 'react'
const { Header, Content, Footer, Sider } = Layout;

export default function Dashboard() {
    return (
        <>
            <div style={{ width: '40%', margin: '0 auto' }}>
                <img style={{ width: '100%' }} src='https://png.pngtree.com/png-clipart/20230824/original/pngtree-boy-avatar-in-round-web-button-isolated-on-white-picture-image_8377276.png' alt='' />
            </div>
            <div className="nav flex-column nav-pills text-left mt-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <div className="nav-link btn text-left" id="v-pills-home-tab" data-toggle="pill" data-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Dashboard</div>
                <div className="nav-link btn active text-left" id="v-pills-profile-tab" data-toggle="pill" data-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Sản phẩm</div>
                <div className="nav-link btn text-left" id="v-pills-messages-tab" data-toggle="pill" data-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Người dùng</div>
                <div className="nav-link btn text-left" id="v-pills-settings-tab" data-toggle="pill" data-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Danh mục sản phẩm</div>
                <div className="nav-link btn text-left" id="v-pills-settings-tab" data-toggle="pill" data-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
