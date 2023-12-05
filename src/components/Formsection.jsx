import React from 'react'
import formsectionimage from '../assets/images/formsectionimage.png'

const Formsection = () => {
  return (
    <div>
      <div className='container pt-53 pb-50'>
        <div className='row'>
          <div className='col-lg-6 col-12 d-flex justify-content-center flex-column '>
            <div className='d-flex align-items-center gap-14'>
              <p className='ff-worksans fs-16 text-orange fw-600'>Contact US</p>
              <div className='line-3'></div>
            </div>
            <h2 className='ff-worksans fs-40 fw-700 pt-3'>Get in touch!</h2>
            <form className='pr-40 pt-24'>
              <div className='d-flex align-items-center w-100 gap-5 pt-24'>
                <input type="text" placeholder='Full Name ' className='form-text ff-worksans fw-normal fs-16 color-black op-7 pb-10 w-50' />
                <input type="e-mail" placeholder='Email Address' className='form-text ff-worksans fw-normal fs-16 color-black op-7 pb-10 ml-8 w-50' />
              </div>
              <input type="text" placeholder='Company Name' className='form-text ff-worksans fw-normal fs-16 color-black op-7 pb-10 pt-24 w-100' />
              <input type="text" placeholder='Message' className='form-text ff-worksans fw-normal fs-16 color-black op-7 pb-40 pt-24 w-100 resize-none' />
              <button className='ff-worksans fs-20 fw-700 color-white navbtn mt-40'>Submit</button>
            </form>
          </div>
          <div className='col-lg-6 col-12 pt-32 pt-lg-0'>
            <img src={formsectionimage} alt="formsectionimage" className='w-100' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formsection
