import React from 'react'
import Html from '../assets/images/html.png';
import Css from '../assets/images/css.png';
import Bootstrap from '../assets/images/bootstrap.png';
import Js from '../assets/images/js.png';
import Php from '../assets/images/php.png';
import Reactjs from '../assets/images/react.png';
import C from '../assets/images/c.png';
import Cpp from '../assets/images/c-.png';
import Python from '../assets/images/python.png';
import Java from '../assets/images/java.png';
import l1 from '../assets/images/1.png';
import l2 from '../assets/images/2.png';
import l3 from '../assets/images/3.png';
import l4 from '../assets/images/4.png';
import l5 from '../assets/images/5.png';
import l6 from '../assets/images/6.png';
import l7 from '../assets/images/7.png';
import l8 from '../assets/images/8.png';
import l9 from '../assets/images/10.png';
import Sql from '../assets/images/sql.png';
import Npm from '../assets/images/npm.png';

const SkillsSection = () => {
   const frontend = [
  { id: 'html', icon: Html, caption: 'HTML', roundedlevel: l1 },
  { id: 'css', icon: Css, caption: 'CSS', roundedlevel: l2 },
  { id: 'bootstrap', icon: Bootstrap, caption: 'Bootstrap', roundedlevel: l3 },
  { id: 'js', icon: Js, caption: 'JavaScript', roundedlevel: l4 },
  { id: 'reactjs', icon: Reactjs, caption: 'React', roundedlevel: l5 }
];

const programming = [
  { id: 'c', icon: C, caption: 'C', roundedlevel: l1 },
  { id: 'cpp', icon: Cpp, caption: 'C++', roundedlevel: l2 },
  { id: 'python', icon: Python, caption: 'Python', roundedlevel: l3 },
  { id: 'java', icon: Java, caption: 'Java', roundedlevel: l4 }
];

const backend = [
  { id: 'php', icon: Php, caption: 'PHP', roundedlevel: l5 },
  { id: 'java', icon: Java, caption: 'Java', roundedlevel: l6 },
  { id: 'python', icon: Python, caption: 'Python', roundedlevel: l7 }
];

const tools = [{id:'npm',icon:Npm,caption:'npm',roundedlevel:l9}]; 

const databases = [{id:'sql',icon:Sql,caption:'Sql',roundedlevel:l9}];  

    return(
      
        <div className='col-12 py-5   bg-white d-flex justify-content-center'>
            <div className=' col-8 '>
                <div className='d-flex  align-items-center mt-3 '>
                        <div style={{height:'70px',width:'4px',backgroundColor:'rgba(8, 67, 59, 1) '}}></div>
                    <h1 className='ms-3 text-success'>SKILLS</h1>
                   
                        
                </div>
                 <hr className='mb-5 pb-4'></hr>

            <div className='col-12'>
                    <div className='d-flex  align-items-center mt-3 '>
                        <div style={{height:'50px',width:'4px',backgroundColor:'rgba(255, 202, 34, 1)'}}></div>
                         <p  style={ {fontSize:'25px'}} className='ms-3 mb-0'>Frontend Technologies</p>
                        
                   </div>
                    

            <div className='d-flex'>
                
                <div className=' d-flex flex-wrap justify-content-center py-4'>
                    {
                frontend.map((item) => (
                    <div key={item.id} className='position-relative ' style={{ width: '140px' }}>
                        <div><img  style={{width:'100px',height:'100px'}} src={item.roundedlevel}></img></div>
                        
                        <div className='d-flex justify-content-center align-items-center h-100' style={{
    position: 'absolute',top:'0px',width: '100px'}}><img  className='p-3 '  src={item.icon } style={{width:'80px',height:'80px'}}></img></div>
                        
                        </div>
                ))
            }

                </div>
                
                </div>
                </div>
                
                <div className='d-flex  align-items-center mt-3 '>
                        <div style={{height:'50px',width:'4px',backgroundColor:'rgba(255, 202, 34, 1)'}}></div>
                         <p  style={ {fontSize:'25px'}} className='ms-3 mb-0'>Programming Technologies</p>
                        
                   </div>
                

            <div className='d-flex'>
                
                <div className=' d-flex flex-wrap justify-content-center py-4'>
                    {
                programming.map((item) => (
                    <div key={item.id} className='position-relative ' style={{ width: '140px' }}>
                        <div><img  style={{width:'100px',height:'100px'}} src={item.roundedlevel}></img></div>
                        
                        <div className='d-flex justify-content-center align-items-center h-100' style={{
    position: 'absolute',top:'0px',width: '100px'}}><img  className='p-3  '  src={item.icon } style={{width:'80px',height:'80px'}}></img></div>
                        
                        </div>
                ))
            }

                </div>
                
                </div>
                
                <div className='d-flex  align-items-center mt-3 '>
                        <div style={{height:'50px',width:'4px',backgroundColor:'rgba(255, 202, 34, 1)'}}></div>
                         <p  style={ {fontSize:'25px'}} className='ms-3 mb-0'>Backend Technologies</p>
                        
                   </div>
                

             <div className='d-flex'>
                
                <div className=' d-flex flex-wrap justify-content-center py-4'>
                    {
                backend.map((item) => (
                    <div key={item.id} className='position-relative ' style={{ width: '140px' }}>
                        <div><img  style={{width:'100px',height:'100px'}} src={item.roundedlevel}></img></div>
                        
                        <div className='d-flex justify-content-center align-items-center h-100' style={{
    position: 'absolute',top:'0px',width: '100px'}}><img  className='p-3  '  src={item.icon } style={{width:'80px',height:'80px'}}></img></div>
                        
                        </div>
                ))
            }

                </div>
                
                </div>
                
                <div className='d-flex  align-items-center mt-3 '>
                        <div style={{height:'50px',width:'4px',backgroundColor:'rgba(255, 202, 34, 1)'}}></div>
                         <p  style={ {fontSize:'25px'}} className='ms-3 mb-0'>Databases</p>
                        
                   </div>

                <p  style={ {fontSize:'30px'}} className='mt-3'></p>
                

            <div className='d-flex'>
                
                <div className=' d-flex flex-wrap justify-content-center py-4'>
                    {
                databases.map((item) => (
                    <div key={item.id} className='position-relative ' style={{ width: '100px' }}>
                        <div><img  style={{width:'100px',height:'100px'}} src={item.roundedlevel}></img></div>
                        
                        <div className='d-flex justify-content-center align-items-center h-100' style={{
    position: 'absolute',top:'0px',width: '100px'}}><img  className='p-3  '  src={item.icon } style={{width:'80px',height:'80px'}}></img></div>
                        
                        </div>
                ))
            }

                </div>
                
                </div>

                <div className='d-flex  align-items-center mt-3 '>
                        <div style={{height:'50px',width:'4px',backgroundColor:'rgba(255, 202, 34, 1)'}}></div>
                         <p  style={ {fontSize:'25px'}} className='ms-3 mb-0'>Other Tools</p>
                        
                   </div>
                

            
            <div className='d-flex'>
                
                <div className=' d-flex flex-wrap justify-content-center pt-4'>
                    {
                tools.map((item) => (
                    <div key={item.id} className='position-relative ' style={{ width: '100px' }}>
                        <div><img  style={{width:'100px',height:'100px'}} src={item.roundedlevel}></img></div>
                        
                        <div className='d-flex justify-content-center align-items-center h-100' style={{
    position: 'absolute',top:'0px',width: '100px'}}><img  className='p-3  '  src={item.icon } style={{width:'80px',height:'80px'}}></img></div>
                        
                        </div>
                ))
            }

                </div>
                
                </div>
            
      
    </div>
        </div>
  )
}

export default SkillsSection
