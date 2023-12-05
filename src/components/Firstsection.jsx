import React from 'react'
import phonepic from '../assets/images/phonepic.png'

const Firstsection = () => {
    return (
        <div>
            <div className='container pt-53'>
                <div className='row'>
                    <div className='col-lg-6 col-12 d-flex justify-content-center align-items-center'>
                        <img src={phonepic} alt="phonepic" className='w-100' />
                    </div>
                    <div className="col-lg-6 col-12 d-flex justify-content-center flex-column pt-32 pt-lg-0 text-c-center">
                        <div className='d-flex align-items-center justify-content-center justify-content-lg-center gap-14'>
                            <p className='ff-worksans fs-16 text-orange fw-600 pos-relative pt-4'>About Us</p>
                            <div className='line-3'></div>
                        </div>
                        <h2 className="ff-worksans fs-40 color-black pt-14 fw-700">What is <span class="text-orange"> Maître D?</span></h2>
                        <p className="ff-worksans color-black op-7 fs-16 fw-normal pt-12">Maître D is a full service solution, designed specifically for salons and
                            barbershops. Our
                            approach is modular, which
                            means you only pay for the functionality that you need. Each module is completely integrated
                            into the solution, so your
                            entire business always remains syncronized. Maître D allows you to see everything within your
                            business, from one
                            location.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Firstsection