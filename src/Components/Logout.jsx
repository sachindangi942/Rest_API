import '../App.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { hideloading, showloading } from '../Reduxs/Fetuchers/AlertsClise'

export const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  

    const logout = () => {

        dispatch(showloading())
        alert('Logout')
        localStorage.removeItem('token')
        dispatch(hideloading())
        navigate('/singin')

    }
    return (
        <>
            <div className='card shadow col-3 float-right mr-4 mt-5'>
                <img className='img-fluid ' src='https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png' alt='...'></img>
                <button className='btn-block' onClick={logout}>Logout</button>
            </div>
        </>
    )
}
