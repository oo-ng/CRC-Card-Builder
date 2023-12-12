/* eslint-disable no-unused-vars */
import { CardTemplate } from '../Components/CardTemplate'
import { Header } from '../Components/Header'
import addImg from '../assets/add.svg'
import CRCImg from '../assets/crcCardImage.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import deleteButton from '../assets/delete.svg'




export const LandingPage = () => {

  const [savedProjects, setSavedProjects] = useState([]);
  const navigate = useNavigate();

  function handleDelete(e, projectId) {
    e.stopPropagation();
    const updatedProjects = savedProjects.filter(project => project.id !== projectId);
    setSavedProjects(updatedProjects);
    localStorage.removeItem(projectId)
  }
  
  useEffect(() => {
      let projects = [];
      console.log(localStorage)
      for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const project = localStorage.getItem(key);
          try {
              const parsedProject = JSON.parse(project);
              if (parsedProject && parsedProject.ProjectName) {
                  projects.push(parsedProject);
              }
          } catch (error) {
              console.error("Error parsing project from localStorage:", error);
          }
      }
      setSavedProjects(projects);
  }, []);

  
    return(
      
        <div className="relative w-screen h-screen overflow-auto">
        <Header/>

        <div className='ml-12 mr-12 '>
          
          <div to= "/setup" className="grid  grid-cols-4 gap-10 mt-16  ">
            <Link to="/setup">
              <CardTemplate imgSrc={addImg} imgAlt="Description for Image">Create New Project</CardTemplate>
            </Link>
                
          </div>


          <p className=' border-b-2 border-black inline-block mt-16 text-2xl'>Saved Projects</p>
          <div className="grid  grid-cols-4 gap-10 mt-6 mb-10 ">
            
            {savedProjects.map((project, index) => (
                        <div key={index} className='flex flex-col'>
                        <Link to={`/setup/${project.id}`}>
                          <CardTemplate imgSrc={CRCImg} imgAlt="Description for Project">
                            {project.ProjectName}
                        </CardTemplate>
                        </Link>
                        <button onClick={(e) => handleDelete(e,project.id)} className='w-5 h-5 border border-black'><img className='bg-red-500' src={deleteButton}/></button>
                        </div>
                        
                    ))}
            
          </div>
          

          


        </div>
     
     
      </div>
    )
}
