//***BoxList***
//
// Place your state that contains all of the boxes here.
//
// This component should render all of the ***Box*** components along with the ***NewBoxForm*** component

import React, {useState} from 'react';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from 'uuid';
const BoxList = () => {
const INITIAL_STATE = [
    {id: uuidv4(), width:"300", height:"300", backgroundColor: "red"},
    {id: uuidv4(), width:"150", height:"150", backgroundColor: "blue"},
    {id: uuidv4(), width:"100", height:"40", backgroundColor: "mediumpurple"}

]
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes ( boxes =>
            [...boxes,
                {...newBox, id: uuidv4() }
            ]);
    }
    const removeBox = (id) =>{
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }
    return(
        <div>
            <h4> Boxes List</h4>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({id, width, height, backgroundColor}) =>
                    <Box id={id}
                         width={width}
                         height={height}
                         backgroundColor={backgroundColor}
                         removeBox={removeBox}
                    />
                )}
            </div>
        </div>
    )

}

export default BoxList;