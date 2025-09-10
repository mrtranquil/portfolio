import React from 'react'
import webdevelopmentbanner from '../assets/images/Services/webdevelopmentservice.png';
import Serviceicon from '@mui/icons-material/TaskAlt';
import { Link } from '@mui/material';

const ServiceSection = () => {
    const services = [
  {
    id: 'custom-web-development',
    title: 'CUSTOM WEBSITE DEVELOPMENT',
    caption: 'I develop responsive websites tailored to your business or personal needs.',
    thumbnail: webdevelopmentbanner,
    contact: ''
  },
  {
    id: 'ecommerce-development',
    title: 'E-COMMERCE WEBSITE DEVELOPMENT',
    caption: 'I create fully functional, secure, and responsive e-commerce websites for your online business.',
    thumbnail: webdevelopmentbanner,
    contact: ''
  },
  {
    id: 'responsive-design',
    title: 'RESPONSIVE DESIGN',
    caption: 'I ensure your website looks and performs great on all devices, including mobiles, tablets, and desktops.',
    thumbnail: webdevelopmentbanner,
    contact: ''
  }
];

  return (
      <div>
           <div className='d-flex justify-content-center bg-white'>
              <div className='col-lg-8 col-11'>
                   <div className='d-flex  align-items-center mt-4  '>
                        <div style={{height:'70px',width:'4px',backgroundColor:'rgba(8, 67, 59, 1) '}}></div>
                      <h1 className='ms-3 text-success'>MY SERVICES</h1>
                         
                  </div>
                  <hr className='mb-4 text-secondary'></hr>

                  <div className='d-flex mb-2 overflow-auto'>
                      {services.map((service) => (
                          <div className='col-10 col-sm-6 col-md-4 p-3'>
                          <div className='border border-secondary rounded-3 position-relative h-100'>
                                  <div style={{aspectRatio:'2/1',overflow:'hidden',position:'relative'}}>
                                      <img className=' rounded-top-3 w-100 ' style={{ objectFit: 'cover' }} src={service.thumbnail}></img>

                                      <div className='d-flex p-3 justify-content-start col-12' style={{ position: 'absolute',bottom: '0px' }}>
                                      <div className='d-flex bg-success-subtle border border-success rounded-3 px-1  '>
                                          
                                      {/* <p className='mb-0  rounded-3 ps-1 text-success h-100 ' style={{fontSize:'13px'}} > {service.issuedyear}</p> */}
                                          
                                      </div>
                                  </div>
                                  </div>
                                 

                                  <div className='d-flex p-3 justify-content-end col-12' style={{ position: 'absolute', top: '0px' }}>
                                      <div className='d-flex bg-success-subtle border border-success rounded-3 px-1  '>
                                          
                                      {/* <p className='mb-0  rounded-3 ps-1 text-success ' style={{fontSize:'13px'}} > {service.issuer}</p> */}
                                          
                                      </div>
                                  </div>

                                  <div className='p-3'>
                                      <div className='d-flex align-items-center'><h5  className=' ms-1 mb-0 text-success'><span className='me-1 '><Serviceicon className='mb-1'/></span>{service.title}</h5></div>
                                      <hr className='pt-1 pb-3 m-0 mt-2'></hr>
                                      <div className='d-flex flex-wrap'><p>{ service.caption}</p>
                                      </div>
                                      <div className='d-flex align-items-end ' style={{height:'100%'}}>
                                          <Link href="#" style={{}} className="text-success text-decoration-none">Cantact us</Link>
                                          </div>
                                  </div>
                              
                              </div>
                               </div>
                      ))}
                          
                          
                     
                          
                      </div>

              </div>
          </div>
      
    </div>
  )
}

export default ServiceSection
