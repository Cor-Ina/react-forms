/* eslint-disable no-unused-vars */

import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        textarea: "",
        isFriendly: true,
    })
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: type === "checkbox" ? checked   : value
        }))
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name= "firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name= "lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder="Your comments"
                onChange={handleChange}
                name="textarea"
                value={formData.textarea}
            />

            <input 
                type="checkbox" 
                id="isFriendly"
                onChange={handleChange}
                name="isFriendly" 
                value={formData.isFriendly}
            />

            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
        </form>
    )
}