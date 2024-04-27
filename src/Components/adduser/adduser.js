import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import "./adduser.css";
import { useNavigate } from 'react-router-dom';


const Adduser = () => {    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        salary: ""
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json(response);
            console.log(data);
            navigate('/'); //manage page

        }catch(err) {
            console.error(err.message);
        }
        // console.log("name",formData.name);
        // console.log("email",formData.email);
        // console.log("phone",formData.phone);
    }

    return (
        <>
            <div className='center-form'>
                <h1>Add New User</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label><br></br>
                        <Form.Control 
                        type="text" 
                        name="name" 
                        placeholder="Enter name" 
                        value={formData.name} 
                        onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Email address</Form.Label><br></br>
                        <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleInputChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Phone</Form.Label><br></br>
                        <Form.Control type="text" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleInputChange}/>
                    </Form.Group><br></br>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Gender</Form.Label><br></br> 
                        <Form.Control type="text" name="gender" placeholder="Enter your gender" value={formData.gender} onChange={handleInputChange}/>
                    </Form.Group><br></br>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Salary</Form.Label><br></br>
                        <Form.Control type="text" name="salary" placeholder="Enter the salary" value={formData.salary} onChange={handleInputChange}/>
                    </Form.Group><br></br>

                    <Button variant="dark" type="submit" className="w-100">Add User</Button>
                </Form>
            </div>
        </>
    );
};

export default Adduser;