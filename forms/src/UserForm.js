import React,{useState} from "react";


const UserForm = () => {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    const initialState = {
        username:"",
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState(initialState)
    const [isInvalid, setIsInvalid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const handleChange = (e) => {
        setIsTouched(true);
        const {name, value} = e.target;


        if(value === ""){
            setIsInvalid(true);
        }else{
            setIsInvalid(false);
        }

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, email, password} = formData;
        if(isInvalid){
             alert(`Created user, ${username} w/ email ${email} & password ${password}`)
        setFormData(initialState);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username </label>
            <input id="username" type="text"
                   name="username"
                   placeholder="username"
                   value={formData.username}
                   onChange={handleChange}
            />

            <label htmlFor="email">Email </label>
            <input type="email"
                   name="email"
                   placeholder="email"
                   id="email" value={formData.email}
                   onChange={handleChange}
            />

            <label htmlFor="password">Password </label>
            <input type="password"
                   name="password"
                   placeholder="password"
                   id="password" value={formData.password}
                   onChange={handleChange}
            />
            {isInvalid && isTouched && <span style={{color: "red"}}>Email can not be blank!</span>}

            <button> Add me to List</button>
        </form>
    )
}

export default UserForm;