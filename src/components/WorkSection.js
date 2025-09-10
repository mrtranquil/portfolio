import { Link } from '@mui/material'
import gamingbanner from '../assets/images/works/gamingwork.png'
import Completed from '@mui/icons-material/VerifiedUser';
import React from 'react'

const WorkSection = () => {
    const works = [{id:'gaming-backend',title:'WEBSITE BACKEND USING PHP',caption:'I build robust PHP backend systems for online game stores, providing secure and seamless purchase experiences for users.',thumbnail:gamingbanner}];
  return (
    <div>
      <div className='d-flex justify-content-center bg-white'>
              <div className='col-lg-8 col-11'>
                   <div className='d-flex  align-items-center mt-4  '>
                        <div style={{height:'70px',width:'4px',backgroundColor:'rgba(8, 67, 59, 1) '}}></div>
                      <h1 className='ms-3 text-success'>MY WORKS</h1>
                         
                  </div>
                  <hr className='mb-4 text-secondary'></hr>

                  <div className='d-flex mb-2 overflow-auto'>
                      {works.map((work) => (
                          <div className='col-10 col-sm-6 col-md-4 p-3'>
                          <div className='border border-secondary rounded-3 position-relative h-100'>
                                  <div style={{aspectRatio:'2/1',overflow:'hidden',position:'relative'}}>
                                      <img className=' rounded-top-3 w-100 ' style={{ objectFit: 'cover' }} src={work.thumbnail}></img>

                                      <div className='d-flex p-3 justify-content-start col-12' style={{ position: 'absolute',bottom: '0px' }}>
                                      <div className='d-flex bg-success-subtle border border-success rounded-3 px-1  '>
                                          
                                      {/* <p className='mb-0  rounded-3 ps-1 text-success h-100 ' style={{fontSize:'13px'}} > {work.issuedyear}</p> */}
                                          
                                      </div>
                                  </div>
                                  </div>
                                 

                                  <div className='d-flex p-3 justify-content-end col-12' style={{ position: 'absolute', top: '0px' }}>
                                      <div className='d-flex bg-success-subtle border border-success rounded-3 px-1  '>
                                          
                                      {/* <p className='mb-0  rounded-3 ps-1 text-success ' style={{fontSize:'13px'}} > {work.issuer}</p> */}
                                          
                                      </div>
                                  </div>

                                  <div className='p-3'>
                                      <div className='d-flex align-items-center'><h5  className=' ms-1 mb-0 text-success'><span className='me-1 '><Completed className='mb-1'/></span>{work.title}</h5></div>
                                      <hr className='pt-1 pb-3 m-0 mt-2'></hr>
                                      <div className='d-flex flex-wrap'><p>{ work.caption}</p>
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

export default WorkSection
