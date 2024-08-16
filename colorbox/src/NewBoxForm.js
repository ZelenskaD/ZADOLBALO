import React, {useState} from 'react';
import "./NewBoxForm.css"
const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {

        width: "",
        height: "",
        backgroundColor: "",
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) =>{
        const {name, value} = e.target;

        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addBox({...formData});
        setFormData(INITIAL_STATE);
    }

    return(
        <form className="BoxForm" onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input type="text"
                   name="width"
                   id="width"
                   placeholder="Enter width"
                   value={formData.width}
                   onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input type="text"
                   name="height"
                   id="height"
                   placeholder="Enter height"
                   value={formData.height}
                   onChange={handleChange}
            />

            <label htmlFor="backgroundColor">Color</label>
            <input type="text"
                   name="backgroundColor"
                   id="backgroundColor"
                   placeholder="Enter color"
                   value={formData.backgroundColor}
                   onChange={handleChange}
            />

            <button>Add Box</button>


        </form>
    )


}

export default NewBoxForm;