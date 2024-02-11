import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import './login.css';


function LoginPage  ()  {

    const [signInResp, setSignIN] = useState(false)

    if (signInResp) {
        // window.location.reload`()
        return <Navigate to="/dashboard" replace="true" />
    }

    const signInHandler =async () =>{
        const data = {
            "email":document.getElementById("email").value,
            "password":document.getElementById("password").value,
        }
        console.log(data);
       await axios.post("http://localhost:5050/user/login",{
           ...data
        }).then(resp=>{
            // console.log(resp);
            setSignIN(resp.data)
            localStorage.setItem("User", JSON.stringify(resp.data))
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <>
            <div className='container loginForm'>
                <br />
                <h3>Login as Tutor or Student</h3>
                <br />
                <Form className="container">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" id="email" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id="password"/>
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Row className="mb-3">
                        <Button as={Col} variant="primary" type="submit" style={{ maxWidth: '20%', marginRight: '20px', marginLeft: '15px' }}
                            onClick={
                                () => {
                                    signInHandler()
                                    // setSignIN(true)

                                    // localStorage.setItem("User", JSON.stringify({ "role": 0 }))
                                    // window.location.reload()
                                }
                            }
                        >
                            Login as User
                        </Button>
                        <Button as={Col} variant="success" type="submit" style={{ maxWidth: '20%' }}
                            onClick={() => {
                                signInHandler()
                                // setSignIN(true)
                                // localStorage.setItem("User", JSON.stringify({ "role": 1 }))
                                // window.location.reload()
                            }}
                        >
                            Login as Tutor
                        </Button>
                    </Row>
                </Form>
                <br />
                <br />
            </div>
        </>
    )
}

export default LoginPage