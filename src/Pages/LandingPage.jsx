import { CardTemplate } from '../Components/CardTemplate'
import { Header } from '../Components/Header'
import addImg from '../assets/add.svg'
import CRCImg from '../assets/CRC.png'

export const LandingPage = () => {
    return(
        <div className="  w-screen h-screen overflow-auto">
        <Header/>

        <div className='ml-12 mr-12 '>
          
          

          <div className="grid  grid-cols-4 gap-10 mt-16  ">
            <CardTemplate imgSrc={addImg} imgAlt="Description for Image">Create new Project</CardTemplate>
            <CardTemplate imgSrc={addImg} imgAlt="Description for Image">Sample Project</CardTemplate>     
          </div>


          <p className=' border-b-2 border-black inline-block mt-16 text-2xl'>Saved Projects</p>
          <div className="grid  grid-cols-4 gap-10 mt-6 mb-10 ">
            <CardTemplate imgSrc={CRCImg} imgAlt="Description for Image">Sample Project</CardTemplate> 
          </div>


        </div>
     
     
      </div>
    )
}
