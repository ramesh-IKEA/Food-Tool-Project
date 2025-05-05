import React, { useState,useEffect } from 'react'
import Button from '@ingka/button';
import renderForm from '../../utils/renderForm'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from '../../schemas/auth'
import localStorage from '../../services/localStorage'
import { postLogin } from '../../services/auth'
import { LoginFileds } from '../../config/login'
import ToastComp from '../../components/toats'
import { useNavigate, useSearchParams } from "react-router-dom";
const Login = () => {
    let [searchParams] = useSearchParams();
    const [btnLoading, setBtnloading] = React.useState(false);
    let [toastVisible, settoastVisible] = useState(false);
    let [toastMessage, setToastMessage] = useState('');
    const methods = useForm({
        resolver: yupResolver(LoginSchema),
    })
    
    // render fields
    const renderLoginForm = LoginFileds.map(field => {
        return renderForm(field, '', '', 'col-md-5');
    });
    const setToastVisibleAction = () => {
        settoastVisible(!toastVisible)
    }
    const submitlogIn = methods.handleSubmit(data => {
        data['password']=btoa(data.password+'&'+Math.random('9'))
        setBtnloading(true);
        postLogin(data).then(res => {
            const { store_id, ufunction, unit_name, token, user_email } = res.data
            localStorage.set('user-token', Math.random().toString().substring(10))
            localStorage.set('user-store-id', store_id)
            localStorage.set('user-function', ufunction);
            localStorage.set('user-unit', unit_name);
            localStorage.set('user_email', user_email);
            localStorage.set('x-access-token', token);
            let next = ufunction === 'store' ? 'case_list' : 'dashboard/new_cases'
            window.location.href = searchParams.get('next') ? searchParams.get('next') : '/' + next;
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
    },['']);
    return (
        <FormProvider {...methods}>
            <ToastComp toastVisible={toastVisible} message={toastMessage} setToastVisibleAction={setToastVisibleAction} />
            <div className="container " style={{ paddingTop: 3 + "rem" }}>
                <div className="">
                    <div className='row' >
                        <div className='col-md-8'>
                        <h3 >Login</h3>
                        <form
                            action=""
                            className="form-horizontal"
                            onSubmit={e => e.preventDefault()}
                        >
                            {renderLoginForm}
                            <Button text="Login" type="primary" onClick={submitlogIn} loading={btnLoading} style={{ color: '#fff' }} />
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
export default Login;