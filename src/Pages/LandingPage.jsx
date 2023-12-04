/* eslint-disable no-unused-vars */
import { CardTemplate } from '../Components/CardTemplate'
import { Header } from '../Components/Header'
import addImg from '../assets/add.svg'
import CRCImg from '../assets/CRC.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'




export const LandingPage = () => {

  const [savedProjects, setSavedProjects] = useState([]);

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
              <CardTemplate imgSrc={addImg} imgAlt="Description for Image">Create new Project</CardTemplate>
            </Link>
            <CardTemplate imgSrc={addImg} imgAlt="Description for Image">Sample Project</CardTemplate>     
          </div>


          <p className=' border-b-2 border-black inline-block mt-16 text-2xl'>Saved Projects</p>
          <div className="grid  grid-cols-4 gap-10 mt-6 mb-10 ">
            <CardTemplate imgSrc={CRCImg} imgAlt="Description for Image">Sample Project</CardTemplate> 
            {savedProjects.map((project, index) => (
                        <CardTemplate key={index} imgSrc={CRCImg} imgAlt="Description for Project">
                            {project.ProjectName}
                        </CardTemplate>
                    ))}
          </div>
          

          


        </div>
     
     
      </div>
    )
}
