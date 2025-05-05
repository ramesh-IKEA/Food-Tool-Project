import React from 'react'
import Toast from "@ingka/toast";
const ToastComp = ({ toastVisible, message,setToastVisibleAction }) => {
    return (<div>
        <Toast
            text={<><strong>{message}</strong></>}
            isOpen={toastVisible}
            onCloseRequest={() => { setToastVisibleAction() }}
        />
    </div>)
}
export default ToastComp;