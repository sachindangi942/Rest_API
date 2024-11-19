
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
// import { Message } from 'antd'
import img1 from './imgs/6335fe29b673f2302415b5cd_localhost-1.webp'
import img2 from './imgs/img2.png';
import img3 from './imgs/img3.webp'
import {Navbar} from './Navbar' 

export const Home = () => {
  const getUserData = async () => {
    try {
      await axios.post('/api/vi/user/homepage', {}, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });

    } catch (error) {
      console.log(`client in something went wrong ${error.message}`)
    }

  }

  useEffect(() => {
    getUserData();
  }, [])
  return (
    <>
      <Navbar />
      <div id="carouselExampleIndicators" className="carousel slide mb-5" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className=" w-100 h-25" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className=" w-100 h-25" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className=" w-100 h-25" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </>
  )
}
