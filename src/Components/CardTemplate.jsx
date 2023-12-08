/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export const CardTemplate = ({children, onClick, imgSrc, imgAlt}) => {
    return(
        <div>
            <div className="bg-blue-400 w-44 h-64 flex flex-col justify-center items-center rounded-md">
              <button onClick={onClick} className='mb-7'>
                <img className= "w-32"src={imgSrc} alt={imgAlt||'Image'}/>
              </button>
              <p className="text-l font-bold">{children}</p>
            </div>
        </div>
    )
}
