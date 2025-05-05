import React, { useState, useEffect, useRef } from 'react'
import Button from '@ingka/button';
import renderForm from '../../utils/renderForm'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { createUsers } from '../../schemas/auth'
import { postCretaeUsers, getUsers, ResetPassword,statusUpdate } from '../../services/users'
import { CreateUsersFileds } from '../../config/login'
import ToastComp from '../../components/toats'
import { useNavigate, useSearchParams } from "react-router-dom";
import ListComponsnt from './list'
const CreateUser = () => {
    let [searchParams] = useSearchParams();
    const initialized = useRef(false);
    const [btnLoading, setBtnloading] = React.useState(false);
    let [toastVisible, settoastVisible] = useState(false);
    let [userList, setUserList] = useState({});
    let [toastMessage, setToastMessage] = useState('');
    const methods = useForm({
        resolver: yupResolver(createUsers),
    })

    // render fields
    const renderLoginForm = CreateUsersFileds.map(field => {
        return renderForm(field, '', '', '');
    });
    const setToastVisibleAction = () => {
        settoastVisible(!toastVisible)
    }
    const submitUpdate = methods.handleSubmit(data => {
        data['password'] = btoa(data.password + '&' + Math.random('9'));
        setBtnloading(true);
        postCretaeUsers(data).then(res => {
            if (res.status === 200) {
                const { message } = res.data
                setToastVisibleAction();
                setToastMessage(message);
                setBtnloading(false);
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }
        })
            .catch(error => {
                setToastVisibleAction();
                setToastMessage(error.response.data.message);
                setBtnloading(false);
            })
    });
    const resetUserPassword = (email, short_id) => {
        const data = { "email": email, "short_id": short_id }
        ResetPassword(data).then(res => {
            if (res.status === 200) {
                const { message } = res.data
                setToastVisibleAction();
                setToastMessage(message);
            }
        })
            .catch(error => {
                setToastVisibleAction();
                setToastMessage(error.response.data.message);
                setBtnloading(false);
            })
    }
    const updateUserStatus = (email,status) => {
        const data = { "email": email,'status':status }
        statusUpdate(data).then(res => {
            if (res.status === 200) {
                const { message } = res.data
                setToastVisibleAction();
                setToastMessage(message);
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }
        })
            .catch(error => {
                setToastVisibleAction();
                setToastMessage(error.response.data.message);
                setBtnloading(false);
            })
    }
    const getUsersList = () => {
        getUsers().then(res => {
            setUserList(res.data.records);
        })
    }
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            getUsersList();
        }
        if (searchParams.get('session')) {
            settoastVisible(!toastVisible);
            setToastMessage('Session expired, Kindly login again');
        }
    }, ['']);
    return (
        <FormProvider {...methods}>
            <ToastComp toastVisible={toastVisible} message={toastMessage} setToastVisibleAction={setToastVisibleAction} />
            <div className="container " style={{ paddingTop: 3 + "rem" }}>
                <div className='row' >
                    <div className="col-md-8">
                        <h3 >User List</h3>
                        <div>
                            <ListComponsnt data={userList} resetUserPassword={resetUserPassword} updateUserStatus={updateUserStatus}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 >Create users</h3>
                        <p style={{ fontSize: '11px' }}>Note: By default Short ID will be treated as password</p>
                        <form
                            action=""
                            className=""
                            onSubmit={e => e.preventDefault()}
                        >
                            {renderLoginForm}
                            <Button text="Create" type="primary" onClick={submitUpdate} loading={btnLoading} style={{ color: '#fff' }} />
                        </form>
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}
export default CreateUser;