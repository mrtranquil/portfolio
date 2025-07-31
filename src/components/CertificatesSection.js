import React from 'react'
import webtechnology from '../assets/images/certificates/webdevelopment.png'
import webtechnology2 from '../assets/images/certificates/webdevelopment2.png'
import webtechnology3 from '../assets/images/certificates/webdevelopment3.jpg'
import Certificate from '@mui/icons-material/WorkspacePremium';
import { Link } from '@mui/material';

const CertificatesSection = () => {
    const Certificates = [{ id: "internshalawebdevelopment", title: 'WEB DEVELOPMENT', issuer: 'Internshala', thumbnail: webtechnology, issuedyear: 2022, technologies: ['HTML', 'CSS', 'BOOTSTRAP', 'JS', 'AJAX', 'PHP', 'SQL', 'REACT'] },
        { id: "skillindiawebdevelopment", title: 'WEB DEVELOPMENT', issuer: 'Skillindia', thumbnail: webtechnology2, issuedyear: 2024, technologies: ['HTML', 'CSS', 'BOOTSTRAP', 'JS', 'AJAX', 'PHP', 'SQL', 'REACT'] },
    {id:"skillsupriseinternship",title:'INTERNSHIP ',issuer:'Skillsuprise',thumbnail:webtechnology3,issuedyear:2024,technologies:['PHP','SQL','REACT']}
    ];
  return (
      <div>
          <div className='d-flex justify-content-center bg-white pt-3'>
              <div className='col-8'>
                   <div className='d-flex  align-items-center  '>
                        <div style={{height:'70px',width:'4px',backgroundColor:'rgba(8, 67, 59, 1) '}}></div>
                      <h1 className='ms-3 text-success'>CERTIFICATES</h1>
                         
                  </div>
                  <hr className='mb-4 text-secondary'></hr>
                  <div className='d-flex mb-5'>
                      {Certificates.map((certificate) => (
                          <div className='col-4 p-3'>
                          <div className='border border-secondary rounded-3 position-relative h-100'>
                                  <div style={{aspectRatio:'2/1',overflow:'hidden',position:'relative'}}>
                                      <img className=' rounded-top-3 w-100 ' style={{ objectFit: 'cover' }} src={certificate.thumbnail}></img>

                                      <div className='d-flex p-3 justify-content-start col-12' style={{ position: 'absolute',bottom: '0px' }}>
                                      <div className='d-flex bg-success-subtle border border-success rounded-3 px-1  '>
                                          
                                      <p className='mb-0  rounded-3 ps-1 text-success h-100 ' style={{fontSize:'13px'}} > {certificate.issuedyear}</p>
                                          
                                      </div>
                                  </div>
                                  </div>
                                 

                                  <div className='d-flex p-3 justify-content-end col-12' style={{ position: 'absolute', top: '0px' }}>
                                      <div className='d-flex bg-success-subtle border border-success rounded-3 px-1  '>
                                          
                                      <p className='mb-0  rounded-3 ps-1 text-success ' style={{fontSize:'13px'}} > {certificate.issuer}</p>
                                          
                                      </div>
                                  </div>

                                  <div className='p-3'>
                                      <div className='d-flex align-items-center'><Certificate className='text-success'/><h5  className=' ms-1 mb-0 text-success'>{certificate.title}</h5></div>
                                      <hr className='pt-1 pb-3 m-0 mt-2'></hr>
                                      <div className='d-flex flex-wrap'>
                                          {certificate.technologies.map((technology)=>(
                                              <p style={{ fontSize:'13px'}} className=' px-2 bg-success-subtle border border-success text-dark rounded-3 mx-1'>{technology}</p>
                                          ))}
                                      </div>
                                      <div className='d-flex align-items-end ' style={{height:'100%'}}>
                                          <Link href="#" style={{}} className="text-success text-decoration-none">Tap to view</Link>
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

export default CertificatesSection
