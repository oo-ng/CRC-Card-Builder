/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export const CardTemplate = ({children, onClick, imgSrc, imgAlt}) => {
    return(
        <div>
            <div className="bg-gray-200 w-44 h-64 flex flex-col justify-center items-center">
              <button onClick={onClick} className='bg-red-700 mb-7'>
                <img className= "w-32"src={imgSrc} alt={imgAlt||'Image'}/>
              </button>
              <p className="text-l font-bold">{children}</p>
            </div>
        </div>
    )
}
