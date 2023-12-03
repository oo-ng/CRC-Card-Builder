import { Header } from "../Components/Header"
export const HelpPage = () => {
    return(
        <>
            <Header/>
            <div >
            <div className='m-12'>
                <h2 className="text-2xl mb-2">Class-Responsibility-Collaborator Modeling</h2>
                <p>
                    Class-responsibility-collaborator (CRC) modeling provides a simple yet effective means 
                    for identifying and organizing the classes essential for system or product requirements.
                    Imagine a CRC model as a collection of index cards, where each card represents a different
                    class in the system. On one side of the card, you list all the responsibilities of the class -
                    these can be attributes (characteristics) or operations (functions or methods) that the class
                    should be able to perform. On the other side, you list all the collaborators. Collaborators are
                    other classes that help the current class fulfill its responsibilities.
                </p>
                <p>
                    This modeling technique is highly visual and interactive. For example, a CRC card for a 
                    &quot; FloorPlan &quot;  class would list its specific responsibilities and the classes like &quot; Wall &quot;  and 
                    &quot; Camera &quot;  it collaborates with to achieve these responsibilities. These responsibilities and
                    collaborations are not set in stone; they can evolve and change as the project progresses.
                </p>
                <p>
                    Responsibilities define what a class can do, while collaborations show how different classes
                    work together. Some responsibilities are fulfilled internally within a class, while others 
                    require outside help, leading to collaboration. A classic example is a security system where
                    a ControlPanel class might need to collaborate with Sensor classes to determine the status
                    of each sensor.
                </p>
                <p>
                    Once you have developed a full set of CRC cards, you can review them with stakeholders to 
                    ensure they accurately represent the system or product. This review process involves 
                    distributing the cards among participants and walking through use cases to see if the 
                    classes and their responsibilities align with the requirements.
                </p>
                
                <h2 className="text-2xl mt-2 mb-2">How to Use Our CRC Card Builder</h2>
                <p>
                    {/* Content for the CRC Card Builder usage instructions will go here */}
                </p>
            </div>

         </div>
        </>
    )
}
