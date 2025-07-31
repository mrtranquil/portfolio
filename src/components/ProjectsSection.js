import React from 'react'
import pglifethumbnail from '../assets/images/projects/pglife/thumbnail.png'
import Development from '@mui/icons-material/Code';
import Livedemo from '@mui/icons-material/Launch';
import SourceCode from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

const ProjectsSection = () => {
    const projects = [{id:'pglife',subject:'Development',title:"PG LIFE",thumbnail:pglifethumbnail,caption:"A fully responsive web platform for discovering PG accommodations across major cities, offering seamless browsing and details on any device",technologies:['HTML','CSS','BOOTSTRAP','JS','AJAX','PHP','SQL'],livedemo:'',sourcecode:''}];
  return (
    <div>
          <div className='d-flex justify-content-center bg-white'>
              <div className='col-8'>
                   <div className='d-flex  align-items-center mt-4  '>
                        <div style={{height:'70px',width:'4px',backgroundColor:'rgba(8, 67, 59, 1) '}}></div>
                      <h1 className='ms-3 text-success'>PROJECTS</h1>
                         
                  </div>
                  <hr className='mb-4 text-secondary'></hr>
                  <div className='d-flex mb-4'>
                      {projects.map((project) => (
                          <div className='col-6 p-3'>
                          <div className='border border-secondary rounded-3 position-relative'>
                                  <img className='col-12 rounded-top-3'  src={project.thumbnail}></img>
                                  <div className='d-flex p-3 justify-content-end col-12' style={{ position: 'absolute', top: '0px' }}>
                                      <div className='d-flex bg-success-subtle border border-success rounded-3 px-2 py-1 '>
                                          <Development className='text-success '/>
                                      <p className='mb-0  rounded-3 ps-1 text-success ' > {project.subject}</p>
                                          
                                      </div>
                                  </div>
                                  <div className='p-3'>
                                      <h5  className='text-success'>{project.title}</h5>
                                      <hr className='pt-1 pb-3 m-0'></hr>
                                      <p className='pb-2'>{project.caption}</p>
                                      <div className='d-flex flex-wrap'>
                                          {project.technologies.map((technology)=>(
                                              <p style={{}} className=' px-2 bg-success-subtle border border-success text-dark rounded-3 mx-1'>{technology}</p>
                                          ))}
                                      </div>
                                      <div className='d-flex py-2'>
                                          <div className='d-flex align-items-center'>
                                              <Livedemo style={{fontSize:'20px'}} className='text-success' />
                                              
                                              <Link style={{textDecoration:'none'}} className='text-success ms-1' href="./#">Live Demo</Link>
                                          </div>
                                          <div className='d-flex ms-4 align-items-center'>
                                              <SourceCode style={{fontSize:'20px'}} className='text-success' />
                                              
                                              <Link style={{textDecoration:'none'}} className='text-success ms-1' href="./#">Source Code</Link>
                                          </div>
                                              
                                          
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

export default ProjectsSection
