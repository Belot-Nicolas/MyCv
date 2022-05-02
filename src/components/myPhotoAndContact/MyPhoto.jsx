import React from 'react';
import './MyPhoto.css';

import PhotoNico from '../../assets/PhotoNico.jpg';

const MyPhoto = () => {
  return (
    <div className='MyPhoto'>
        <div className='photoNico'>
        <img  src={PhotoNico} alt="Nico" />
        </div>

        <div className="spinner"></div>
    </div>
  )
}

export default MyPhoto