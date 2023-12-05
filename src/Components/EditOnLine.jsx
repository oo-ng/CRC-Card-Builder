import editButton from '../assets/pencilEdit.svg'
// eslint-disable-next-line react/prop-types
export const EditOnLine = ({isOpen, setIsOpen, nameOfEditable, setNameOfEditable, altText, identifier}) => {
    return(
        <div>
             <div className="text-xl border-b-2 border-black">{identifier}: {isOpen?
                            <form className="flex flex-col" onSubmit={(e)=>{
                                e.preventDefault();
                                if(e.target.elements.input.value===""){
                                    e.target.elements.input.value= altText 
                                }
                                setNameOfEditable(e.target.elements.input.value)
                                setIsOpen(!isOpen)
                            }}>
                                <input name="input" className="pt-2 m-2 " type="text"/>
                                <button className="bg-blue-400 m-2 justify-items-center w-28  items-center p-2 " type="submit ">submit</button>
                            </form>
                            :nameOfEditable}
                                {isOpen?"":<button onClick={()=>{setIsOpen(!isOpen)}}>
                                    <img src={editButton}/>
                                </button>}
                        </div>
        </div>
    )
}
