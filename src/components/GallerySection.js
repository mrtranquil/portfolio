import React, { useRef, useState } from 'react'
import one from '../assets/images/gallery/1.png'
import CancelIcon from '@mui/icons-material/Cancel';


const GallerySection = () => {
  const imgurl = useRef(null);
  const [fullimg, setfullimg] = useState('none');
  const gallery = [{ id: 'webdevelopment', url: one }, { id: 'webdevelopment2', url: one }];
  const showimage = (url) => {
    setfullimg('flex');
    
   
    imgurl.current.src = url;
    
  };
  return (
    <div>
      <div  className='w-100 h-100  align-items-center justify-content-center ' style={{ position: 'fixed',zIndex:'1000',top:'0px',backgroundColor:'rgba(47, 47, 47, 0.62)',display:fullimg }}>
       
        <div className='d-flex  justify-content-center h-100 px-5   position-relative'>
          <div className='d-flex justify-content-end col-12' style={{position:'absolute'}} ><CancelIcon onClick={()=>{setfullimg('none')}} style={{color:'rgba(69, 69, 69, 1)'}}/></div>
          <img className='' ref={imgurl}  >
          </img></div>
  

      </div>
      <div className='d-flex justify-content-center bg-white'>
              <div className='col-8'>
                   <div className='d-flex  align-items-center mt-4  '>
                        <div style={{height:'70px',width:'4px',backgroundColor:'rgba(8, 67, 59, 1) '}}></div>
                      <h1 className='ms-3 text-success'>MY Gallery</h1>
                         
                  </div>
                  <hr className='mb-4 text-secondary'></hr>

                  <div className='d-flex mb-2'>
                      {gallery.map((image) => (
                          <div className='col-4 p-3 ' style={{aspectRatio:'2/1'}}>
                              <img onClick={(e)=>{showimage(e.target.src)}}  src={image.url} className='col-12 rounded-3' style={{objectFit:'cover'}}></img>
                               </div>
                      ))}
                          
                          
                     
                          
                      </div>

              </div>
          </div>
    </div>
  )
}

export default GallerySection
