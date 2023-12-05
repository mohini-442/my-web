import React from 'react'
import logo from '../assets/images/logo.png'
import sun from '../assets/images/sun.png'
import arrow from '../assets/images/arrow.png'
const Navsec = () => {
    return (
        <div>
            <div className='bg-image min-vh-lg-100 min-vh-70 pos-relative z-2'>
                <div className='container text-center'>
                    <div className='d-flex align-items-center justify-content-between pt-24'>
                        <div className='d-flex align-items-center'>
                            <img src={logo} alt="logo" className='cursor-pointer' />
                        </div>
                        <div className="d-flex align-items-center">
                            <label for="menubar" className="z-index">
                                <span></span>
                                <span></span>
                                <span></span>

                            </label>
                            <input type="checkbox" id="menubar" hidden />
                            <ul class="d-flex gap-46 mobile-view">
                                <li><a href="" className='ff-worksans fs-16 fw-normal color-black'>Home</a></li>
                                <li><a href="" className='ff-worksans fs-16 fw-normal color-black'>Modules</a></li>
                                <li><a href="" className='ff-worksans fs-16 fw-normal color-black'>Pricing</a></li>
                                <li><a href="" className='ff-worksans fs-16 fw-normal color-black'>Features</a></li>
                                <li><a href="" className='ff-worksans fs-16 fw-normal color-black'>Contact Us</a></li>
                            </ul>
                            <span className='pt-4 pl-26 cursor-pointer'><svg width="20" height="20" viewBox="0 0 20 20"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.70898 16.4198C10.484 16.4194 12.2078 15.8252 13.606 14.7318L18.002 19.1278L19.416 17.7138L15.02 13.3178C16.114 11.9195 16.7086 10.1952 16.709 8.4198C16.709 4.0088 13.12 0.4198 8.70898 0.4198C4.29798 0.4198 0.708984 4.0088 0.708984 8.4198C0.708984 12.8308 4.29798 16.4198 8.70898 16.4198ZM8.70898 2.4198C12.018 2.4198 14.709 5.1108 14.709 8.4198C14.709 11.7288 12.018 14.4198 8.70898 14.4198C5.39998 14.4198 2.70898 11.7288 2.70898 8.4198C2.70898 5.1108 5.39998 2.4198 8.70898 2.4198Z"
                                    fill="black" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div className='pos-relative'>
                        <h2 className='ff-worksans fs-62 max-w-729 text-center mx-auto pt-60 fs-40'>Maitre D – Store Management for Barbers</h2>
                        <img src={arrow} alt="arrow" className='arrow d-none d-md-block' />
                    </div>
                    <button className='navbtn ff-worksans fs-20 fw-700 color-white mt-40 text-center mx-auto'>Submit</button>
                </div>
                <img src={sun} alt="sun" className='sun' />
            </div>

        </div>
    )
}

export default Navsec
