import React, { useEffect, useRef } from 'react';
import banner from '../assets/images/banner.png';
import Contact from '@mui/icons-material/PermContactCalendar';
import Instagram from '@mui/icons-material/Instagram';
import Telegram from '@mui/icons-material/Telegram';
import Email from '@mui/icons-material/Email';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {useState} from 'react';
import { green } from '@mui/material/colors';
import { GitHub } from '@mui/icons-material';

const AboutSection = () => {
  const [activateId, setactivateId] = useState(null);
  const [hoverid, sethoverid] = useState(null);
  const [autohoverindex, setautohoverindex] = useState(0);
  const interval = useRef(null);

  const detailitems = [
    { id: 'contact', iconitem: <Contact style={{ color: 'rgba(255, 202, 34, 1)' }} />, link: "tel:+919491153421", details: 'Call to 9491153421' },
  { id: 'whatsapp',   iconitem: <WhatsAppIcon style={{color:'rgba(255, 202, 34, 1)'}}/>,   link:"https://wa.me/9491153421?text=Hi%20I%20saw%20your%20portfolio%20and%20want%20to%20connect", details: 'Message on Whataspp' },
  { id: 'instagram', iconitem: <Instagram  style={{color:'rgba(255, 202, 34, 1)'}}/>, link:"https://www.instagram.com/praveen_why/", details: 'View Insta Profile ' },
  { id: 'telegram',  iconitem: <Telegram style={{color:'rgba(255, 202, 34, 1)'}}/>,  link:"https://t.me/PraveenPrakashYeripilli", details: 'Text in Telegram' },
  { id: 'email',     iconitem: <Email style={{color:'rgba(255, 202, 34, 1)'}}/>,     link:"mailto:yeripillipraveenprakash@gmail.com", details: 'Send a Email' },
  { id: 'linkedin',  iconitem: <LinkedIn style={{color:'rgba(255, 202, 34, 1)'}}/>,  link:"https://www.linkedin.com/in/praveen-prakash-yeripilli-510490316/", details: 'Visit LinkedIn Profile' },
  { id: 'github',    iconitem: <GitHub style={{color:'rgba(255, 202, 34, 1)'}}/>,    link:"https://github.com/mrtranquil", details: 'Visit Github Profile' }
  ];
  const textid = hoverid ||activateId || detailitems[autohoverindex].id;
  const detailstext = detailitems.find(item => item.id === textid)?.details || '';


  useEffect(() => { 
    
    interval.current = setInterval(() => {
      setautohoverindex((index => (index + 1)%detailitems.length));
      
    }, 1000);
    return () => { clearInterval(interval.current) };
  },[autohoverindex]);


    return (
     
     <div>
       
      <div style={{  }} className="col-12 ">
        <img alt='banner' src={banner} style={{height:'440px',position:'fixed',zIndex:'-500'}}></img>
        <div className=' d-flex justify-content-center justify-content-md-start   col-12   align-items-center' style={{height:'440px'}}>
        <div className='col-md-2' >
        </div>
          <div className='p-lg-3  pt-lg-5'>
            <h2 className='mb-4 ms-1' style={{textShadow:' 2px 2px 5px rgba(15, 12, 0, 1)' ,color:'rgba(255, 202, 34, 1)'}}>Hi, I am</h2>
            <h1 className='text-white mb-0 nametitle ' style={{ textShadow:' 2px 2px 5px rgba(0, 0, 0, 1)' }}>PRAVEEN PRAKASH</h1>
           
            <div className='d-flex justify-content-center mt-3' >
              <h3 className='text-white py-3 py-lg-0'>WEB DEVELOPER..</h3>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3'>
              {detailitems.map((detailitem) => (
                <a href={detailitem.link} target='_blank'>
                  <div key={detailitem.id} onClick={() => { setactivateId(detailitem.id) }} onMouseEnter={() => { sethoverid(detailitem.id) }} onMouseLeave={() => { sethoverid(null) }} style={{ background: activateId === detailitem.id ||textid===detailitem.id? 'rgba(8, 67, 59, 1)' : 'unset' ,cursor:'pointer'}} className='information-circle-item  rounded-circle border border-2  border-dark p-1 p-sm-2 mx-2'>
                  {detailitem.iconitem}
                  </div>
                </a>
              ))}

       
              
              
             

            </div>
            <h4 className='text-white mt-4 d-flex justify-content-center ' id='detailstext'>{detailstext}</h4>
        </div>
        </div>
        <div className='d-flex flex-wrap align-items-center bg-white'>
          <div className='col-lg-2'></div>
            <div className='col-lg-5  py-4  pe-3 px-5 px-lg-0'><p className='text-dark' style={{ lineHeight: 2, fontSize: '25px', margin: '0px' }}>I am Praveen Prakash Yeripilli, currently pursuing my BTech and dedicated to expanding my skills in technology. I focus on creating impactful digital solutions. I thrive on challenges that drive my growth and inspire innovation.</p></div>
           
           <div className='d-flex px-4 px-md-0 justify-content-center justify-content-lg-between  ps-lg-3 col-12 col-lg-5 align-items-center'>
            <div className='   rounded-3 d-none d-lg-none ' style={{ height: '150px', width: '3px', backgroundColor: 'green' }}>
              
            </div>
              <div className='px-3 col-md-8 col-12 pt-5 pt-lg-none  '>
              <div className='d-flex justify-content-between align-items-center  '>
                <p style={{fontSize:'17px', backgroundColor: 'rgba(17, 105, 94, 1) ',margin:'0px'}} className="text-white px-3 py-1 rounded-3">Age :</p>
                <p style={{margin:'0px',fontSize:'18px',color:'rgba(8, 67, 59, 1) '}} className=''>18</p>

              </div>
              <hr></hr>

              <div className='d-flex justify-content-between align-items-center '>
                <p style={{fontSize:'17px', backgroundColor: 'rgba(17, 105, 94, 1) ',margin:'0px',minWidth:'101px'}} className="text-white px-3 py-1 rounded-3">Address :</p>
                <p style={{margin:'0px',fontSize:'18px',color:'rgba(8, 67, 59, 1) '}} className='ms-2'>Visakhapatnam, India</p>

              </div>
              <hr></hr>

              
              <div className='d-flex justify-content-between align-items-center '>
                <p style={{fontSize:'17px', backgroundColor: 'rgba(17, 105, 94, 1) ',margin:'0px'}} className="text-white px-3 py-1 rounded-3">Freelancing :</p>
                <p style={{margin:'0px',fontSize:'18px',color:'rgba(8, 67, 59, 1) '}} className=''>Available</p>

              </div>


              

            </div>
            <div></div>

        </div>
        </div>
       
        
      
      </div>
   </div>
  )
}

export default AboutSection
