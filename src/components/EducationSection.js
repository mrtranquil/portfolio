import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import completed from '../assets/images/education/completed.png';
import notcompleted from '../assets/images/education/notcompleted.png';
import tenthbanner from '../assets/images/education/10ththumbnail.png';
import { Link } from '@mui/material';
import Education from '@mui/icons-material/School';
import diplomabanner from '../assets/images/education/diplomabanner.png';
import btechbanner from '../assets/images/education/btechbanner.png';


const EducationSection = () => {
   const educations = [
  {
    id: '10th',
    course: 'ssc',
    brach: 'ZPHS Gangavaram',
    title: '10th (SSC)',
    thumbnail: tenthbanner,
    caption: 'Completed my 10th class in SSC board at ZPHS Gangavaram in 2022'
  },
  {
    id: 'diploma',
    course: 'diploma',
    brach: 'Chaitanya Engineering College, CME',
    title: 'Diploma in CME',
    thumbnail: diplomabanner,
    caption: 'Completed my diploma in CME from Chaitanya Engineering College'
  },
  {
    id: 'degree',
    course: 'btech',
    brach: 'Raghu Engineering College, CSE',
    title: 'B.Tech in CSE',
    thumbnail: btechbanner,
    caption: 'Currently pursuing B.Tech in Computer Science Engineering at Raghu Engineering College'
  }
];


  return (
    <div>
      <div className='d-flex justify-content-center bg-white pt-5 pb-5'>
              <div className='col-8'>
                   <div className='d-flex  align-items-center  '>
                        <div style={{height:'70px',width:'4px',backgroundColor:'rgba(8, 67, 59, 1) '}}></div>
                      <h1 className='ms-3 text-success'>EDUCATION</h1>
                         
                  </div>
                  <hr className='mb-5 pb-3 text-secondary'></hr>
                  <div style={{position:'relative',paddingTop:'60px'}} className=' col-12 '>
                      <ProgressBar now={55}/>
                       <div style={{position:'absolute',top:'0px',zIndex:'2'}} className=' col-12 d-flex justify-content-evenly align-items-center'>
                      <div className='d-flex justify-content-center col-4'>
                              <div className='col-12'>
                                  <div className='d-flex justify-content-center'><p className='  rounded-3 bg-success-subtle px-3'>2022</p></div>
                                  <img className='d-flex mx-auto col-2' src={completed}></img>
                          </div>
                      </div>
                      <div className='d-flex justify-content-center col-4'>
                         <div className='col-12'>
                                  <div className='d-flex justify-content-center'><p className='  rounded-3 bg-success-subtle px-3'>2025</p></div>
                                  <img className='d-flex mx-auto col-2' src={completed}></img>
                          </div>
                      </div>
                      <div className='d-flex justify-content-center col-4'>
                          <div className='col-12'>
                                  <div className='d-flex justify-content-center'><p className='  rounded-3 bg-success-subtle px-3'>Not Yet</p></div>
                                  <img className='d-flex mx-auto col-2' src={notcompleted}></img>
                          </div>
                      </div>
                      
                      </div>
                      <div className='d-flex mb-2 mt-3 ' style={{position:'relative',zIndex:'0'}}>
                      {educations.map((education) => (
                          <div className='col-4 p-3'>
                          <div className='border border-secondary rounded-3 position-relative h-100'>
                                  <div style={{aspectRatio:'2/1',overflow:'hidden',position:'relative'}}>
                                      <img className=' rounded-top-3 w-100 ' style={{ objectFit: 'cover' }} src={education.thumbnail}></img>

                                      <div className='d-flex p-3 justify-content-start col-12' style={{ position: 'absolute',bottom: '0px' }}>
                                      <div className='d-flex bg-success-subtle border border-success rounded-3 px-1  '>
                                          
                                      <p className='mb-0  rounded-3 ps-1 text-success h-100 ' style={{fontSize:'13px'}} > {education.issuedyear}</p>
                                          
                                      </div>
                                  </div>
                                  </div>
                                 

                                  <div className='d-flex p-3 justify-content-end col-12' style={{ position: 'absolute', top: '0px' }}>
                                      <div className='d-flex bg-success-subtle border border-success rounded-3 px-1  '>
                                          
                                      <p className='mb-0  rounded-3 ps-1 text-success ' style={{fontSize:'13px'}} > {education.brach}</p>
                                          
                                      </div>
                                  </div>

                                  <div className='p-3'>
                                      <div className='d-flex align-items-center'><Education className='text-success me-2'/><h5  className=' ms-1 mb-0 text-success'>{education.title}</h5></div>
                                      <hr className='pt-1 pb-3 m-0 mt-2'></hr>
                                      <p>{ education.caption}</p>
                                      
                                      
                                  </div>
                              
                              </div>
                               </div>
                      ))}
                          
                          
                     
                          
                      </div>
                      
                 </div>
              </div>
              </div>
    </div>
  )
}

export default EducationSection
