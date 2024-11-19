import '../App.css'
import { useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { hideloading, showloading } from '../Reduxs/Fetuchers/AlertsClise'


export const Restration = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [From, setForm] = useState([])

    const setvalue = (event) => {
        setForm({ ...From, [event.target.name]: event.target.value })

    }

    const restration = async (e) => {
        e.preventDefault();

        try {
            dispatch(showloading())
            const resp = await axios.post('/api/vi/user/restration', From)
            dispatch(hideloading())
            if (resp.data.success) {
                console.log(resp.data.message)
                message.success('successfully registration')
                navigate('/singin');
            } else {
                console.log(resp.data.message)
                message.error(resp.data.message)

            }

        } catch (error) {
            console.log(`some errors ${error}`);
        }

    }

    return (
        <>
            <div className='container'>
                <div className=' row justify-content-center mx-auto '>
                    <div className='card col-6 shadow my-4 p-3'>
                        <form>
                            <div className='mb-3 font-weight-bold'><h5 className='display-5 '>Restration</h5></div>
                            <hr></hr>
                            <div className='from-group'>

                                <label>FirstName:</label>
                                <input type={'text'} name={'fname'} className='form-control' onChange={setvalue}></input>

                                <label>LastName:</label>
                                <input type={'text'} name={'lname'} className='form-control' onChange={setvalue}></input>

                                <label>Email:</label>
                                <input type={'text'} name={'ename'} className='form-control' onChange={setvalue}></input>

                                <label>Mobile:</label>
                                <input type={'Number'} name={'mname'} className='form-control' onChange={setvalue}></input>

                                <label>Password:</label>
                                <input type={'text'} name={'pname'} className='form-control' onChange={setvalue}></input>
                            </div><br></br>
                            <button onClick={restration} className='btn-block btn-primary'>Restraton</button>
                            <p><Link to={'/singin'}>if you already restered Click here </Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </>



    )
}