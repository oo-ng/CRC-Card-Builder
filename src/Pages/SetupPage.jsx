/* eslint-disable no-unused-vars */
import { Header } from "../Components/Header"
import { useReducer, useEffect } from "react"
import { useState } from "react"
import editButton from '../assets/pencilEdit.svg'
import deleteButton from '../assets/delete.svg'
import saveButton from '../assets/save.svg'
import downloadButton from '../assets/Download.svg'
import uploadButton from '../assets/Upload.svg'
import { EditOnLine } from "../Components/EditOnLine"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"


const reducer = (state, action)=>{
    switch(action.type){
        case "editProjectName":
            if(action.payload==="")return{...state, nameOfProject:"NewProject"};
            return{...state, nameOfProject:action.payload};
        
        
        
        
    }
}
export const SetupPage = () => {
    const {projectId}= useParams();
    const navigate = useNavigate();
    const initialState = {
        nameOfProject:"NewProject",
        cardInfo:{}
    }
    const [state, dispatch]=useReducer(reducer, initialState)
    const { nameOfProject }=state;
    const[isNameOfProjectFormOpen, setIsNameOfProjectFormOpen] = useState(false);
    const[isNameOfCardFormOpen, setIsNameOfCardFormOpen] = useState(false);
    const[isDescriptionFormOpen, setIsDescriptionFormOpen] = useState(false);
    const [nameOfCard, setNameOfCard] =useState("New Card");
    const [description, setDescription] =useState(`A New Card in ${nameOfProject}`);
    const [entries, setEntries] = useState([])
    const [cardCollection, setCardCollection] =useState([]);

    useEffect(()=>{
        if(projectId){
            const obj=localStorage.getItem(projectId);
            const savedInfo=JSON.parse(obj);
            console.log(savedInfo)
            console.log(savedInfo.cardCollection)

            if(savedInfo){
                dispatch({type: "editProjectName", payload: savedInfo.ProjectName});
                setCardCollection(savedInfo.CardCollection)
            }
        }
    },[projectId])

    const handleCardFromFile = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.json';
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
    
            if (file) {
                const reader = new FileReader();
    
                reader.onload = (e) => {
                    try {
                        const jsonData = JSON.parse(e.target.result);
                        const { CardName, Description, Entries } = jsonData;
                        
                        const newEntry = {
                            id: CardName,
                            CardName: CardName,
                            Description: Description,
                            Entries: Entries,
                        };

                        setNameOfCard(newEntry.CardName);
                        setDescription(newEntry.Description);
                        setEntries(newEntry.Entries);

                        handleEditeSavedCard(newEntry);

    
                    } catch (error) {
                        console.error('Error loading card:', error);
                        alert('Error loading card. Please check your file.');
                    }
                };
    
                reader.readAsText(file);
            } else {
                alert('Please select a file before clicking Upload.');
            }
        });
    
        fileInput.click();
    };

    const handleSaveProject = () =>{
        const newProject ={
            id: nameOfProject,
            ProjectName: nameOfProject,
            CardCollection:cardCollection
        }

        try {
            const project = JSON.stringify(newProject);
            localStorage.setItem(newProject.id, project);
            alert("Project saved successfully.");
            navigate('/')
            
        } catch (error) {
            console.error("Error saving project:", error);
            alert("Project wasn't saved.");
        }
    }

    const handleSaveCard = () =>{        

        const newEntry={
            id:nameOfCard,
            CardName: nameOfCard,
            Description: description,
            Entries: entries
        }
        
        const idExists = cardCollection.some(card => card.id === newEntry.id);

        if (!idExists) {
            
            setCardCollection([...cardCollection, newEntry]);
            setNameOfCard("");
            setDescription(``);
            setEntries([]);
            alert("Card Saved successfully.");
            console.log("cardCollection:", cardCollection)
        } else {
            alert("An entry with this ID already exists.");
        }
        
        
    }

    const handleEditeSavedCard = (entry) =>{
        setNameOfCard(entry.CardName);
        setDescription(entry.Description);
        setEntries(entry.Entries);
        handleDeleteSavedCard(entry.id)

    }

    const handleDeleteSavedCard=(id)=>{
        setCardCollection(cardCollection.filter(card => card.id !== id));
    }
    const handleAddResponsibilityCollaboratorEntry = (e) => {
        e.preventDefault();
        const newEntry = {
            id: Date.now(), 
            responsibilityContent: e.target.elements.responsibilityInput.value,
            collaboratorContent: e.target.elements.collaboratorInput.value
        };
        setEntries([...entries, newEntry]);
    
        
        e.target.elements.responsibilityInput.value = '';
        e.target.elements.collaboratorInput.value = '';
    };

    const handleDeleteResponsibilityCollaboration = (id) => {
        setEntries(entries.filter(entry => entry.id !== id));
    };
    
    const handleDownloadCard = (card) => {
        const jsonData = JSON.stringify(card, null, 2); // Convert card data to JSON string with indentation
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Create a link element and initiate download
        const a = document.createElement('a');
        a.href = url;
        a.download = `${card.CardName}_CRC_Card.json`; // Set the filename using the card's name
        document.body.appendChild(a);
        a.click();

        // Cleanup
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return(

        <>

            <Header/>
            <div className='m-12 '>
                <div className="absolute right-0 mt-4 mr-4">
                    <button onClick={handleCardFromFile} className="bg-green-400 p-2" title="Upload a CRC card">
                        <img className="w-6" src={uploadButton} alt="Upload Button" />
                    </button>
                 </div>

                <h2 className="inline-block text-3xl pr-4">Project Name: {isNameOfProjectFormOpen?
                    <form className=" flex flex-col" onSubmit={(e)=>{
                        e.preventDefault();
                        dispatch({type: 'editProjectName', payload: e.target.elements.inputNameOfProject.value})
                        setIsNameOfProjectFormOpen(!isNameOfProjectFormOpen)}}>
                        <input name="inputNameOfProject" className="pt-2 mr-2 border-2 border-black" type="text"/>
                        <button className="bg-blue-400 justify-items-center w-28 items-center pt-2 border-2 border-black" type="submit">Submit</button>
                    </form>:
                    nameOfProject}
                </h2>
                
                {isNameOfProjectFormOpen?"":<button onClick={()=>setIsNameOfProjectFormOpen(!isNameOfProjectFormOpen)}><img src={editButton}/></button>}                

                <div className="relative mt-20 flex flex-row ">
                    <table className="min-w-[20rem] border-2 border-black ">
                    <tbody>
                        
                        
                        {/* Class Name */}
                         <tr>
                         <td className="p-4 border-2 border-black bg-blue-400 whitespace-normal break-words max-w-[20rem]">
                        <EditOnLine 
                        identifier={"Class"}
                        isOpen={isNameOfCardFormOpen}
                        setIsOpen={setIsNameOfCardFormOpen}
                        nameOfEditable={nameOfCard}
                        setNameOfEditable={setNameOfCard}
                        altText={"New Card"}
                        />
                        </td>
                        </tr>

                        <tr>
                         <td className="p-14 border-2 border-black whitespace-normal break-words max-w-[20rem]">
                        <EditOnLine 
                        identifier={"Description"}
                        isOpen={isDescriptionFormOpen}
                        setIsOpen={setIsDescriptionFormOpen}
                        nameOfEditable={description}
                        setNameOfEditable={setDescription}
                        altText={`A New Card in ${nameOfProject}`}
                        inputClasses={`h-20`}
                        />
                        </td>
                        </tr>
                      
                        <div className="flex flex-grow justify-between ">
                       
                            <p className="text-xl  border-b-2 border-black pr-28 p-3">
                                Responsibility
                            </p>
                            
                            <p className="text-xl  border-b-2 pr-32  border-black p-3">
                                Collaborators
        
                            </p>
                            
                            </div>
                        

                        {entries.map((entry) => (
                                <tr key={entry.id} className="border-b-2 border-black">
                                    <div className="flex flex-grow justify-between divide-x divide-black ">
                                    <td className="p-2 whitespace-normal break-words max-w-[9rem]">
                                     {entry.responsibilityContent}
                                     
                                </td>

                                    <td className="p-2 whitespace-normal break-words max-w-[9rem]">
    
                                        <p> {entry.collaboratorContent}</p>
                                        </td>
                                        <button onClick={() => handleDeleteResponsibilityCollaboration(entry.id)}><img src={deleteButton}/></button>
                                    </div>
                                    
                                 </tr>
                            ))} 
                        

                         
                            
                            <div className="flex flex-row justify-center mt-auto">
                               
                                <button onClick={handleSaveCard} className="border-2 bg-blue-400 mr-20 p-3 "><img src={saveButton}/>Save Card</button>
                               
                            </div>

                            </tbody>    
                    </table>
                    
                    <form onSubmit={(e)=>{
                            e.preventDefault();
                            handleAddResponsibilityCollaboratorEntry(e)}} 
                            className=" m-10">
                        <div>
                            <p>Responsibility: </p>
                            <input name="responsibilityInput" className="h-20 w-80  border-2 border-black"/>
                        </div>

                        <div>
                            <p>Collaborator: </p>
                            <input name="collaboratorInput" className="h-20 w-80 border-2 border-black"/>
                        </div>

                        <div className="flex justify-end">
                            <button 
                            type="submit" 
                            className="m-4 pt-2 pb-2 transform translate-x-max pl-6 pr-6  border-2 border-black">
                                Add
                            </button>
                        </div>
                        
                    </form>

                    <div className=" flex flex-col  right-0 top-0 justify-between">
                    
                        <div className="">
                            {cardCollection.map((entry) => (
                                <div key={entry.id} className="bg-gray-200 flex flex-col mb-2 p-2 whitespace-normal break-words max-w-[25rem]">
                                    <p>Card Name: {entry.CardName}</p>
                                  
                                    <p>Description: {entry.Description}</p>
                                    
                                    <div className=" flex flex-row gap-20">
                                    <button className="m-2" onClick={() => handleDeleteSavedCard(entry.id)} title="Delete CRC card">
                                        <img className="w-6  bg-red-500" src={deleteButton}/>
                                    </button>
                                    <button className="m-2"onClick={() => handleEditeSavedCard(entry)} title="Edit CRC card">
                                        <img className="w-6  bg-blue-400" src={editButton}/>
                                    </button>
                                    <button className="m-2" onClick={() => handleDownloadCard(entry)} title="Download CRC card">
                                        <img className="w-6  bg-blue-400" src={downloadButton} alt="Download" />
                                    </button>

                                    </div>
                                    
                                </div>
                            ))}
                            
                        </div>

                <div className=" flex flex-col mt-10 ml-auto w-80">
                        <button onClick={handleSaveProject} className="bg-blue-400 border-2 border-black ">Save Project </button>
                </div>

                       

                        
                    </div>

                    
                </div>
            </div>
        </>
    )
}