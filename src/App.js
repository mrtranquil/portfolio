
import { useRef } from 'react';
import './App.css';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import Profile from '@mui/icons-material/AccountCircle';
import Resume from '@mui/icons-material/Article';
import Skills from '@mui/icons-material/DesignServices';
import Projects from '@mui/icons-material/Source';
import Education from '@mui/icons-material/School';
import Certifications from '@mui/icons-material/WorkspacePremium';
import Services from '@mui/icons-material/SettingsAccessibility';
import Works from '@mui/icons-material/Work';
import Gallery from '@mui/icons-material/Collections';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import EducationSection from './components/EducationSection';
import ServiceSection from './components/ServiceSection';
import WorkSection from './components/WorkSection';
import GallerySection from './components/GallerySection';

function App() {


  
  const aboutsection = useRef(null);
  const skillssection = useRef(null);
  const projectsection = useRef(null);
  const educationsection = useRef(null);
  const certificates = useRef(null);
  const services = useRef(null);
  const works = useRef(null);
  const gallery = useRef(null);
  const handlescroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
     }
   }

  return (
    <div>
      <div  className="col-lg-2 d-none  d-lg-flex justify-content-start  py-4 mt-4 position-fixed" >
          <div style={{marginLeft:'35px',backgroundColor:'rgba(8, 67, 59, 1) '}} className='left-section-box col-6  py-5   border border-secondary rounded-3 px-3' >
          <div onClick={() => { handlescroll(aboutsection) }}  className='hover-size-increse '> 
                  <div className='d-flex justify-content-center'>
                      <Profile className='text-white left-section-icon'  />
              </div>
              <p style={{fontSize:"11px"}} class="left-section-text m-0 mt-1 text-white d-flex justify-content-center ">ABOUT</p>
              
              </div>
              <hr className="text-white mt-2" />
              
              <div onClick={()=>{handlescroll(skillssection)}} className='hover-size-increse '> 
                  <div className='d-flex justify-content-center'>
                      <Skills className='text-white left-section-icon'  />
              </div>
              <p style={{fontSize:"11px"}} class="left-section-text m-0 mt-1 text-white d-flex justify-content-center ">SKILLS</p>
              
              </div>
              <hr className="text-white  mt-2" />
              <div onClick={()=>{handlescroll(projectsection)}} className='hover-size-increse '> 
                  <div className='d-flex justify-content-center'>
                      <Projects className='text-white left-section-icon'  />
              </div>
              <p style={{fontSize:"11px"}} class="left-section-text m-0 mt-1 text-white d-flex justify-content-center ">PROJECTS</p>
              
              </div>
              <hr className="text-white mt-2" />
              <div onClick={()=>{handlescroll(educationsection)}} className='hover-size-increse '> 
                  <div className='d-flex justify-content-center'>
                      <Education  className='text-white left-section-icon'  />
              </div>
              <p style={{fontSize:"11px"}} class="left-section-text m-0 mt-1 text-white d-flex justify-content-center ">EDUCATION</p>
              
              </div>
              <hr className="text-white mt-2" />
               <div onClick={()=>{handlescroll(certificates)}} className='hover-size-increse '> 
                  <div className='d-flex justify-content-center'>
                      <Certifications  className='text-white left-section-icon'  />
              </div>
              <p style={{fontSize:"11px"}} class="left-section-text m-0 mt-1 text-white d-flex justify-content-center ">CERTIFICATIONS</p>
              
              </div>
              <hr className="text-white mt-2"/>
              <div onClick={()=>{handlescroll(services)}} className='hover-size-increse '> 
                  <div className='d-flex justify-content-center'>
                      <Services className='text-white left-section-icon'  />
              </div>
              <p style={{fontSize:"11px"}} class="left-section-text m-0 mt-1 text-white d-flex justify-content-center ">SERVICES</p>
              
              </div>
              <hr className="text-white mt-2" />

              <div onClick={()=>{handlescroll(works)}} className='hover-size-increse '> 
                  <div className='d-flex justify-content-center'>
                      <Works className='text-white left-section-icon'  />
              </div>
              <p style={{fontSize:"11px"}} class="left-section-text m-0 mt-1 text-white d-flex justify-content-center ">WORKS</p>
              
              </div>
              <hr className="text-white mt-2" />
              
           
              
              <div onClick={()=>{handlescroll(gallery)}} className='hover-size-increse '> 
                  <div className='d-flex justify-content-center'>
                      <Gallery className='text-white left-section-icon'  />
              </div>
              <p style={{fontSize:"11px"}} class="left-section-text m-0 mt-1 text-white d-flex justify-content-center ">GALLERY</p>
              
              </div>
             
          </div>
          
      
    </div>
      
      <div ref={aboutsection}>
 <AboutSection  />
      </div>
       
      <div ref={ skillssection}>
        <SkillsSection  />
      </div>

      <div ref={projectsection}>
        <ProjectsSection/>
      </div>

      <div  ref={educationsection}>
        <EducationSection/>
      </div>
      
      <div ref={certificates}>
        <CertificatesSection/>
      </div>
      <div ref={services}>
        <ServiceSection/>

      </div>
      
      <div ref={works}>
        <WorkSection/>
      </div>

      <div ref={gallery}>
        <GallerySection/>
      </div>

    </div>
   
  );
}

export default App;
