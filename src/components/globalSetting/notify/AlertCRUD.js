import { Alert, Space, message } from "antd"
import React from "react";
import { useDispatch } from "react-redux";

export const AlertCRUD = ({ openAlert, type, message }) => {
    const dispatch = useDispatch();
    if (openAlert) {
        setTimeout(() => {
            dispatch({
                type: "CANCEL_ALERT_CRUD",
            })
        }, 5000)
        return <div className="mb-4 w-50">
            <Alert
                message={message}
                type={type}
                showIcon
                closable
            />
        </div>
    }
}
export const NotifyCRUD = (notifyData) => {
    const dispatch = useDispatch();
    const type = notifyData?.type;
    const messageLog = notifyData?.messageLog;
    if (messageLog) {
        dispatch({
            type: "CLEAR_NOTIFY_CRUD"
        })
        return message[type](messageLog);
    }
};
