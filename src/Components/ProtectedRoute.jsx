import { Navigate } from 'react-router-dom'

export  function ProtectedRoute(props) {
if(localStorage.getItem('token')){
    return props.children
}else{
    return <Navigate to = "/restration" />
}
}
