import React from 'react';
import {Link} from 'react-router-dom';
function Home() {
    return(
        <div>
            <p> Click to go to the
                 <Link to="/eat">
                   Eat page
            </Link>
           </p>
    <h1>I AM HUNGRY</h1>
            <img
                src ="https://i.giphy.com/pBj0EoGSYjGms.gif"
                alt="Audrey II wants to eat."
            />
        </div>
    )
}

export default Home;