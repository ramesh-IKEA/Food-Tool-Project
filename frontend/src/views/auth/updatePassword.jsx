import React, { useState, useEffect } from 'react'
import Button from '@ingka/button';
import renderForm from '../../utils/renderForm'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordSchema } from '../../schemas/auth'
import localStorage from '../../services/localStorage'
import { postUpdatePassord } from '../../services/auth'
import { UpdatepasswordFileds } from '../../config/login'
import ToastComp from '../../components/toats'
import { useNavigate, useSearchParams } from "react-router-dom";
const UpdatePassword = () => {
    let [searchParams] = useSearchParams();
    const [btnLoading, setBtnloading] = React.useState(false);
    let [toastVisible, settoastVisible] = useState(false);
    let [toastMessage, setToastMessage] = useState('');
    const methods = useForm({
        resolver: yupResolver(passwordSchema),
    })

    // render fields
    const renderLoginForm = UpdatepasswordFileds.map(field => {
        return renderForm(field, '', '', 'col-md-5');
    });
    const setToastVisibleAction = () => {
        settoastVisible(!toastVisible)
    }
    const submitUpdate = methods.handleSubmit(data => {
        data['password'] = btoa(data.password + '&' + Math.random('9'));
        data['user_id']=localStorage.get('user_email');
        setBtnloading(true);
        postUpdatePassord(data).then(res => {
            if (res.status === 200) {
                const { message } = res.data
                localStorage.remove('user-token');
                localStorage.remove('user-unit');
                localStorage.remove('user-function');
                localStorage.remove('user_email');
                localStorage.remove('user-store-id');
                localStorage.remove('x-access-token');
                window.location.href = "/login"
                setToastVisibleAction();
                setToastMessage(message);
                setBtnloading(false);
            }
        })
            .catch(error => {
                setToastVisibleAction();
                setToastMessage(error.response.data.message);
                setBtnloading(false);
            })
    });
    useEffect(() => {
        if (searchParams.get('session')) {
            settoastVisible(!toastVisible);
            setToastMessage('Session expired, Kindly login again');
        }
    }, ['']);
    return (
        <FormProvider {...methods}>
            <ToastComp toastVisible={toastVisible} message={toastMessage} setToastVisibleAction={setToastVisibleAction} />
            <div className="container " style={{ paddingTop: 3 + "rem" }}>
                <div className="">
                    <div className='row' >
                        <div className='col-md-8'>
                            <h3 >Update Password</h3>
                            <form
                                action=""
                                className="form-horizontal"
                                onSubmit={e => e.preventDefault()}
                            >
                                {renderLoginForm}
                                <Button text="Update" type="primary" onClick={submitUpdate} loading={btnLoading} style={{ color: '#fff' }} />
                            </form>
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}
export default UpdatePassword;