import React, {useState} from 'react';
import Modal from 'react-modal';
import SearchTopic from './SearchTopic';


const CreateWall = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className='CreateWall'>
            <SearchTopic />
            <button onClick={() => setModalIsOpen(true)}> Create Wall</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <form>
                <div ClassName="form-control">
                <label> Select Study Course:
        <select>
            <option value="html">Week 1 : HTML</option>
            <option value="css">Week 2 : CSS</option>
            <option value="javaScrip">Week 3 : Java Script</option>
            <option value="webAPIs">Week 4 : Web APIs</option>
            <option value="thirdPartAPIs">Week 5 : Third Party APIs</option>
            <option value="serverSideAPIs">Week 6 : Server Side APIs</option>
            <option value="project1">Week 7 : Project 1</option>
            <option value="project1Contd">Week 8 : Project 1 Continued</option>
            <option value="nodeJS">Week 9 : Node.JS</option>
            <option value="opp">Week 10 : OOP</option>
            <option value="express">Week 11 : Express</option>
            <option value="mySQL">Week 12 : MySQL</option>
            <option value="mvc">Week 13 : MVC</option>
            <option value="fullStack">Week 14 : Full Stack</option>
            <option value="project2">Week 15 : Project 2</option>
            <option value="project2Contd">Week 16 : Project 2 Continued</option>
            <option value="noSQL">Week 17 : NoSQL</option>
            <option value="pwa">Week 18 : PWA</option>
            <option value="react">Week 19 : React</option>
            <option value="state">Week 20 : State</option>
            <option value="mern">Week 21 : MERN</option>
            <option value="computerScience">Week 22 : Computer Science</option>

        </select>
        </label>
                </div>
                <div ClassName="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="5"></textarea>
                </div>
                <div ClassName="form-control">
                    <label htmlFor="date">Study Date</label>
                    <input type="date" id="date"></input>
                </div>
            </form>
            
            
                <button onClick={() => setModalIsOpen(false)}>Submit</button>
            
            </Modal>
        </div>
    )
}


export default CreateWall;
