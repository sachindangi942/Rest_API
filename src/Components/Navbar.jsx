import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-md-top">
                <Link className="navbar-brand" href="#"><img src='https://www.netsetsoftware.com/images/mern_top_img.png' alt='#' className='img-fluid ' style={{ width: '60px' }}></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            <Link className="nav-link" to={''}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/movies'}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/field'}>Field</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to={''} className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">Dropdown</Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to={''}>Action</Link>
                                <Link className="dropdown-item" to={''}>Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to={''}>Something else here</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link to={'/restration'} className='nav-link'>SinUp</Link>
                        </li>
                        <li className='nav-item'> 
                            <Link to={'/singin'} className='nav-link'>Sing In</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/logout'} className='nav-link'>Logout</Link>
                        </li>
                    </ul>

                </div>

            </nav>
        </>
    )
}
