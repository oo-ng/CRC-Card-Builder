import { Header } from "../Components/Header";

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
                        <li><a href="#deleting-card"><span className="hover:bg-gray-100 underline">How do I delete an existing Card?</span></a></li>
                        <li><a href="#navigation"><span className="hover:bg-gray-100 underline">How do I navigate across different pages?</span></a></li>
                    </ul>
                    <hr className="w-full border-t border-black-300 my-8" />
                    <div className="mb-8">
                    <h2 className="text-2xl mb-2 underline">Class-Responsibility-Collaborator Modeling</h2>
                    </div>
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
                        &quot; FloorPlan &quot; class would list its specific responsibilities and the classes like &quot; Wall &quot; and
                        &quot; Camera &quot; it collaborates with to achieve these responsibilities. These responsibilities and
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

                    <h2 className="text-2xl mt-2 mb-2 underline" id="crc-builder">How to Use Our CRC Card Builder</h2>
                   

                    {/* Additional Headings */}
                    <h2 className="text-2xl mt-2 mb-2 underline" id="creating-project">Creating a Project</h2>
                    <p>
                        {/* Content for creating a project instructions will go here */}
                        Steps to create a new project in the CRC Card Builder.
                    </p>

                    <h2 className="text-2xl mt-2 mb-2 underline" id="creating-card">Creating a Card</h2>
                    <p>
                        {/* Content for creating a card instructions will go here */}
                        Steps to create a new CRC card for a class.
                    </p>

                    <h2 className="text-2xl mt-2 mb-2 underline" id="editing-card">Editing a Card</h2>
                    <p>
                        {/* Content for editing a card instructions will go here */}
                        Steps to edit an existing CRC card for a class.
                    </p>

                    <h2 className="text-2xl mt-2 mb-2 underline" id="deleting-card">Deleting a Card</h2>
                    <p>
                        {/* Content for deleting a card instructions will go here */}
                        Steps to delete a CRC card for a class.
                    </p>

                    <h2 className="text-2xl mt-2 mb-2 underline" id="navigation">Navigation</h2>
                    <p>
                        {/* Content for navigation instructions will go here */}
                        How to navigate through the CRC Card Builder interface.
                    </p>
                </div>
            </div>
        </>
    )
}
