import axios from "axios";
import { useState } from "react";
import { message } from 'antd'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showloading,hideloading } from "../Reduxs/Fetuchers/AlertsClise";

export const Singin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Form, setForm] = useState([])

    const setvalue = (event) => {
        setForm({ ...Form, [event.target.name]: event.target.value })
    }

    const login = async (event) => {
        event.preventDefault();
        try {
            dispatch(showloading())
            const response = await axios.post('/api/vi/user/login', Form)
            dispatch(hideloading())
            if (response.data.success) {
                localStorage.setItem('token',response.data.token) 
                message.success(response.data.message)
                navigate('/')
                
            }else{
                message.error(response.data.message)
            }


        } catch (error) {
            dispatch(hideloading())
            console.log(`something went wrong ${error}`)
        }

    }
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center mx-auto  '>
                    <div className='col-6 card shadow mt-5 '>
                        <form onSubmit={login}>
                            <div className='font-weight-bold my-2'><h4>Login</h4></div>
                            <div className='form-group'>
                                <label>Username:</label>
                                <input type={'text'} name='uname' className='form-control' onChange={setvalue}></input>
                            </div>
                            <div className='form-group'>
                                <label>Password:</label>
                                <input type={'text'} name='pname' className='form-control' onChange={setvalue}></input>
                            </div>
                            <button className='btn-block  btn-primary mb-3'>Login</button>
                        </form>
                        <Link to={'/restration'} className='mb-4'>if you are not a user Click Here</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
