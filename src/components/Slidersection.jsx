import React from 'react'
import sliderimg from '../assets/images/sliderimg.png'

const Slidersection = () => {
    return (
        <div className='container pt-32 pb-50'>
            <div className='d-flex align-items-center justify-content-center gap-14'>
                <p className='ff-worksans fs-16 text-orange fw-600 pos-relative'>Modules</p>
                <div className='line-3'></div>
            </div>
            <h2 className="ff-worksans fs-40 color-black pt-14 fw-700 text-center">Why Choose<span class="text-orange"> Maître D?</span></h2>
            <div className='slider-card mx-auto mt-40'>
                <div className='row'>
                    <div className='col-lg-6 col-12 text-c-center'>
                        <img src={sliderimg} alt="slider-img"  className='w-100'/>
                    </div>
                    <div className='col-lg-6 col-12 pt-24 pb-50 text-c-center'>
                        <h2 className='ff-worksans fs-24 fw-700'>Manage Your <span className='text-orange'>Customer Queues</span></h2>
                        <p className='ff-worksans fs-16 color-black op-7 pt-20 fw-normal'>The Maitre D queue management system is designed to allow your customers to sign up for walk-in appointments and select the services they want ahead of time. The queue will provide them with estimated wait times, costs and will allow them to even select their preferred stylist.</p>
                        <p className='ff-worksans fs-16 color-black op-7 pt-20 fw-normal'>As the queue gets bigger or smaller, its easy to monitor your operations and understand when wait periods are getting too long to service your customer base and to better resource your stores during busy periods. Beat the frustration of your customers ahead of time and help manage how they wait for your services</p>
                        <button className='ff-worksans fs-20 fw-700 color-white navbtn mt-40'>Buy Now</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Slidersection
