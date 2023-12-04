/* eslint-disable no-unused-vars */
import { Header } from "../Components/Header"
import { useReducer, useEffect } from "react"
import { useState } from "react"
import editButton from '../assets/pencilEdit.svg'
import deleteButton from '../assets/delete.svg'
import { EditOnLine } from "../Components/EditOnLine"

const reducer = (state, action)=>{
    switch(action.type){
        case "editProjectName":
            if(action.payload==="")return{...state, nameOfProject:"NewProject"};
            return{...state, nameOfProject:action.payload};
        
        
        
        
    }
}
export const SetupPage = () => {
    
    const initialState = {
        nameOfProject:"NewProject",
        cardInfo:{}
    }
    const [state, dispatch]=useReducer(reducer, initialState)
    const { nameOfProject, author }=state;
    const[isNameOfProjectFormOpen, setIsNameOfProjectFormOpen] = useState(false);
    const[isNameOfCardFormOpen, setIsNameOfCardFormOpen] = useState(false);
    const[isDescriptionFormOpen, setIsDescriptionFormOpen] = useState(false);
    const[nameOfCard, setNameOfCard] =useState("New Card");
    const[description, setDescription] =useState(`A New Card in ${nameOfProject}`);
    const[responsibility, setResponsibility] = useState([]);
    const[collaborator, setCollaborator] = useState([])


    
    return(

        <>

            <Header/>
            <div className='m-12 '>
                <h2 className="inline-block text-3xl pr-4">Project Name: {isNameOfProjectFormOpen?
                    <form className=" flex flex-col" onSubmit={(e)=>{
                        e.preventDefault();
                        dispatch({type: 'editProjectName', payload: e.target.elements.inputNameOfProject.value})
                        setIsNameOfProjectFormOpen(!isNameOfProjectFormOpen)}}>
                        <input name="inputNameOfProject" className="pt-2 mr-2 border-2 border-black" type="text"/>
                        <button className="bg-blue-400 justify-items-center w-28 items-center pt-2 border-2 border-black" type="submit">Submit</button>
                    </form>:
                    nameOfProject}</h2>
                {isNameOfProjectFormOpen?"":<button onClick={()=>setIsNameOfProjectFormOpen(!isNameOfProjectFormOpen)}><img src={editButton}/></button>}
                

                <div className="relative mt-20 flex flex-row ">
                    <div className=" flex flex-col bg-gray-200 h-[37.5rem] w-[35rem] p-10" >
                        

                        <EditOnLine 
                        identifier={"Class"}
                        isOpen={isNameOfCardFormOpen}
                        setIsOpen={setIsNameOfCardFormOpen}
                        nameOfEditable={nameOfCard}
                        setNameOfEditable={setNameOfCard}
                        altText={"New Card"}
                        />

                        <EditOnLine 
                        identifier={"Description"}
                        isOpen={isDescriptionFormOpen}
                        setIsOpen={setIsDescriptionFormOpen}
                        nameOfEditable={description}
                        setNameOfEditable={setDescription}
                        altText={`A New Card in ${nameOfProject}`}
                        inputClasses={`h-20`}
                        />
                        
                        
                            <div className=" flex flex-row justify-between">
                                <div className="text-xl pr-40 border-r-2  border-black">
                                    Responsibility
                                    {responsibility.length > 0 ? 
                                    (responsibility.map((item, index) => (
                                    <p key={index}>{item}</p>))) : ""}
                                </div>
                                <div className="text-xl pr-40 pl-2  border-black">
                                    Collaborators
                                    {collaborator.length > 0 ? 
                                    (collaborator.map((item, index) => (
                                    <p key={index}>{item}</p>))) : ""}
                                </div>
                            </div>

                            <button className="mt-auto border-2 bg-red-500 w-8 border-black"><img src={deleteButton}/></button>
                        
                    </div>

                    <form onSubmit={(e)=>{
                                e.preventDefault();
                                setResponsibility([...responsibility, e.target.elements.responsibilityInput.value]);
                                setCollaborator([...collaborator, e.target.elements.collaboratorInput.value]);

                                e.target.elements.responsibilityInput.value = '';
                                e.target.elements.collaboratorInput.value = '';

                                
                            }} className=" m-10">
                        <div>
                            <p>Responsibility: </p>
                            <input name="responsibilityInput" className="h-20 w-80  border-2 border-black"/>
                        </div>

                        <div>
                            <p>Collaborator: </p>
                            <input name="collaboratorInput" className="h-20 w-80  border-2 border-black"/>
                        </div>

                        <div className="flex justify-end">
                            <button 
                            type="submit" 
                            className="m-4 pt-2 pb-2 transform translate-x-max pl-6 pr-6  border-2 border-black">
                                Add
                            </button>
                        </div>
                        
                    </form>

                    <div className=" flex flex-col absolute gap-80 right-0 top-0 justify-between">
                        <div className="">
                            <button className="m-4 pt-2 pb-2 transform translate-x-max pl-6 pr-6  border-2 border-black">Show all cards</button>
                        </div>

                        <div className="">
                            <button className="m-4 pt-2 pb-2 transform translate-x-max pl-6 pr-6  border-2 border-black">Add new card</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

