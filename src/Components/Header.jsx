import logoImg from '../assets/logo1.jpeg'
import helpImg from '../assets/help.svg'
import { Link } from 'react-router-dom'
export const Header = () => {
    return(
        
        <div className="bg-blue-400 flex flex-row  justify-between ">
            <Link to="/">
            <img className="inline w-16 " src={logoImg} alt="CRC_Logo"/>
            <p className='text-4xl inline-block mt-4'>CRC Card Builder</p>
            </Link>

            <Link to="/help">
            <img className="w-14 ml-14" src={helpImg} alt="help_image"/>
            <span className='m-4'>What is a CRC Card?</span>
            </Link>
        </div>
        
    )
}
