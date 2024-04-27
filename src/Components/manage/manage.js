import { useEffect, useState } from "react";
import {Col, Table, Row, Container, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "react-bootstrap";


const Manage = () => {    
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try{
            const response = await fetch('http://localhost:5000/api/users');
            const data = await response.json();
            setUsers(data);
        }
        catch(err){
            console.error("error while fetching users:",err.message);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUpdate = (userId) => {
        navigate(`/user/${userId}`);
    }

    const handleDelete = async (userId) => {
        try{
            const response = await fetch(`http://localhost:5000/api/users${userId}`, {
                method: "DELETE"
            });
            console.log(response);
            if(response.ok){
                fetchUsers();
            }
        }
        catch(err){
            console.error("Error while deleting users:",err.message);
        }
    }

    return (
        <>
            <Container className="mt-5">
            <Row>
                <Col>
                    <h1 className="text-center">Manage Component</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Salary</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.salary}</td>
                                    <td>
                                            <Button
                                                variant="dark"
                                                onClick={() => handleUpdate(user._id)}
                                            > 
                                                Update
                                            </Button>{" "}
                                            <Button
                                                variant="danger"
                                                onClick={() => handleDelete(user._id)}
                                            > Delete
                                            </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            </Container>
            {/* <h1>Manage component</h1> */}
        </>
    )
}

export default Manage;