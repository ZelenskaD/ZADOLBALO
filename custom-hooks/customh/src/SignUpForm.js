import React from "react" ;
import useFields from "./hooks/useFields"

const SignUpForm = () =>{
    const [formData, handleChange, resetForm] = useFields({
        username: "",
        email : "",
        password :""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
                handleChange={handleChange}
                placeholder="username"
            />

            <input
                type="text"
                name="email"
                value={formData.email}
                handleChange={handleChange}
                placeholder="email"

            />

            <input
                type="text"
                name="password"
                value={formData.password}
                handleChange={handleChange}
                placeholder="password"

            />
            <button>Submit</button>
        </form>
    )
}

export default SignUpForm;