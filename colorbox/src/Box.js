import React from 'react';
const Box = ({id, width, height, backgroundColor, removeBox}) => {
    const handleRemoving = (e) =>{
        e.preventDefault();
        removeBox(id);
    };//remove btn

    const boxStyle= {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
        margin: '30px',
        display: "inline-block",
        border: "2px solid black"


    };

    return (
        <div className="Box" style={boxStyle} data-testid={`box-${id}`}>
            <button onClick={handleRemoving} data-testid={`remove-box-${id}`}>
                X
            </button>
        </div>


    );
};

export default Box;