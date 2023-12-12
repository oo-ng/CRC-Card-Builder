import { Header } from "../Components/Header";
import CRCCardExample from '../assets/CRCCardExample.png'
import NewProjEx from '../assets/NewProjEx.png'
import CreateProjectEx from '../assets/CreateProjectEx.png'
import collab from '../assets/collab.png'
import howtoDel from '../assets/howtoDel.png'
import howtoUpload from '../assets/howtoUpload.png'
import saveCard from '../assets/saveCard.png'
import createCard from '../assets/createCard.png'
import editCard from '../assets/editCard.png'



export const HelpPage = () => {
   return (
       <>
           <Header />
           <div>
               <div className='m-12'>
               <div className="mb-2">
               <h2 className="text-2xl mb-2 font-bold">FAQ</h2>
               <hr className="w-full border-t border-black-300 my-8" />
               </div>
               <ul>
            
                       <li><a href="#creating-project"><span className="hover:bg-gray-100 underline">How do I create a project?</span></a></li>
                       <li><a href="#creating-card"><span className="hover:bg-gray-100 underline">How do I create a card?</span></a></li>
                       <li><a href="#editing-card"><span className="hover:bg-gray-100 underline">How do I edit an existing card?</span></a></li>
                       <li><a href="#deleting-card"><span className="hover:bg-gray-100 underline">How do I delete an existing card?</span></a></li>
                       <li><a href="#navigation"><span className="hover:bg-gray-100 underline">How do I download/upload a card?</span></a></li>
                   </ul>
                   <hr className="w-full border-t border-black-300 my-8" />
                   <div className="mb-8">
                   <h2 className="text-2xl mb-2 underline">Class-Responsibility-Collaborator Modeling</h2>
                   </div>
                   <div className="mb-8">
                   <p>
                       Class-responsibility-collaborator (CRC) modeling provides a simple yet effective way
                       for identifying and organizing the classes essential for system or product requirements.
                       Imagine a CRC model as a collection of index cards, where each card represents a different
                       class in the system. On one side of the card, you list all the responsibilities of the class -
                       these can be attributes (characteristics) or operations (functions or methods) that the class
                       should be able to perform. On the other side, you list all the collaborators. Collaborators are
                       other classes that help the current class fulfill its responsibilities. 
                   </p>
                   </div>
                  
                   <div className="mb-8">
                   <p>
                       Responsibilities define what a class can do, while collaborators show how different classes
                       work together. Some responsibilities are fulfilled within a class, while others
                       require outside help, leading to collaboration. These responsibilities and
                       collaborators can change as the project progresses.
                   </p>
                   </div>
                   <p>
                       Once you have developed a full set of CRC cards, you can review them with stakeholders to
                       ensure they accurately represent the system or product. 
                       <div className="mb-8 mx-auto">

                    <img src={CRCCardExample} alt="CRC Card Example" width="300" height="300" className="mx-auto"/>

                    </div>
                   </p>

                  
                   <h2 className="text-2xl mt-2 mb-2 underline " id="crc-builder">How to Use Our CRC Card Builder</h2>
                   <hr className="w-full border-t border-black-300 my-8" />


                   {/* Additional Headings */}
                   <h2 className="text-2xl mt-2 mb-2 underline" id="creating-project">Creating a Project</h2>
                   <p>
                       {/* Content for creating a project instructions will go here */}
                       To create a project, click on the interface card labeled "Create New Project."
                      
                       <div className="mb-10 m-4 mx-auto">

                        <img src={CreateProjectEx} alt="ProjExample" width="200" height="200" className="mx-auto"/>

                        </div>
                      
                   </p>
                   <p>
                   Once created, click on the pencil icon and type in the name of your project.
                   <div className="mb-10 m-4 mx-auto">

                        <img src={NewProjEx} alt="ProjExample" width="300" height="300" className="mx-auto border border-black"/>

                        </div>
                   
                   </p>

             
                   <h2 className="text-2xl mt-2 mb-2 underline" id="creating-card">Creating a Card</h2>
                   <p>
                       To add a class name or description, click on the pencil icons located near the field of the name. A text box will display once you click on it.

                       <div className="mb-10 m-4 mx-auto">

                        <img src={createCard} alt="editCard" width="300" height="300" className="mx-auto "/>

                        </div>
                       To add a responsibility and collaborator, type in the corresponding field and click "Add." 
                       <div >
                        <img src={collab} alt="howtoDel" width="300" height="300" className="mx-auto "/>

                        </div>
                      
                   </p>
                   <p className="m-2"> Click on the "Save Card" button to save your card! </p>

                   <h2 className="text-2xl mt-2 mb-2 underline" id="editing-card">Editing a Card</h2>
                   <p>
                       {/* Content for editing a card instructions will go here */}
                       Click on the pencil icon located on the saved card that you plan to edit.
                       <div className="mb-10 m-4 mx-auto">

                    <img src={editCard} alt="editCard" width="300" height="300" className="mx-auto "/>

                    </div>

                   </p>


                   <h2 className="text-2xl mt-2 mb-2 underline" id="deleting-card">Deleting a Card</h2>
                   <p>
                       {/* Content for deleting a card instructions will go here */}
                       Click on the trash can icon located on the card you want to delete. Once you do this action, it can not be reversed!
                       <div className="mb-10 m-4 mx-auto">

                        <img src={howtoDel} alt="howtoDel" width="300" height="300" className="mx-auto "/>

                        </div>
                   </p>


                   <h2 className="text-2xl mt-2 mb-2 underline" id="navigation">Saving a Card</h2>
                   <p>
                       {/* Content for navigation instructions will go here */}
                        To download a card, click on the download icon located within the saved card.
                        <div className="mb-10 m-4 mx-auto">

                        <img src={saveCard} alt="saveCard" width="300" height="300" className="mx-auto "/>

                        </div>


                   </p>
                   <p>
                        To upload a saved card, click on the upload icon located above all your saved cards.
                        <div className="mb-10 m-4 mx-auto">

                        <img src={howtoUpload} alt="howtoDel" width="200" height="200" className="mx-auto "/>

                        </div>
                   </p>
               </div>
           </div>
       </>
   )
}



