import React from 'react'
import footerlogo from '../assets/images/footerlogo.png'
import footerellipse1 from '../assets/images/footerellipse1.png'
import f2 from '../assets/images/f2.png'
import f4 from '../assets/images/f4.png'

const Footersection = () => {
    return (
        <div className='footer-bg pos-relative overflow-hidden'>
            <div className='container pt-53 text-center'>
                <div className='pt-53'>
                    <img src={footerlogo} alt="footerlogo" />
                    <p className='ff-worksans fw-normal fs-14 color-white max-w-440 text-center mx-auto pt-3 lh-153'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
                    <div className='d-flex pt-24 gap-50 max-w-375 text-center mx-auto '>
                        <p className='ff-worksans fw-normal fs-14 color-white text-center mx-auto  pt-16 cursor-pointer'>Navigation</p>
                        <p className='ff-worksans fw-normal fs-14 color-white text-center mx-auto pt-16 cursor-pointer'>Company</p>
                        <p className='ff-worksans fw-normal fs-14 color-white text-center mx-auto pt-16 cursor-pointer'>Contact</p>
                    </div>
                </div>
                
            </div>
            <p className='ff-worksans color-white fw-normal fs-12 pt-60 pb-10 op-7 footer-line text-center'>Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©</p>
            <img src={footerellipse1} alt="footerellipse1" className='footerellipse1' />
            <img src={f2} alt="f2" className='f2' />
            <img src={f2} alt="f2" className='f3' />
            <img src={f2} alt="f2" className='f5' />
            <img src={f4} alt="f2" className='f4' />
        </div>
    )
}

export default Footersection
