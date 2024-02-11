import React, {useState} from 'react';
import * as yup from 'yup'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { userSchema } from './UserValidations';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function SignUpPage ()  {


    const [signUpResp, setSignUpResp] = useState(false)

   
    const createUser = (event) => {
        console.log(event);
        event.preventDefault();
        let formData = {
        };

        axios.post('http://localhost:5050/user/signup', JSON.stringify({
            name: String(document.getElementById("Name").value),
            email: String(document.getElementById("email").value),
            password: String(document.getElementById("password").value)
        }
        )).then(function (response) {

            setSignUpResp(true)
        // console.log(response);
        //     this.setState({
        //         ...this.state,
        //         UserDetails: response.data
        //     })
        }).catch(err=>{
            
            setSignUpResp(true)
        })
        console.log(formData);
    }

    const createTutor = (event) => {
        console.log(event);
        event.preventDefault();
        let formData = {
            
        };

        axios.post('http://localhost:5050/tutors/addTutor', {
            name: document.getElementById("Name").value,

            email: document.getElementById("email").value,
            password: document.getElementById("password").value        
    })
            .then(function (response) {
               
            setSignUpResp(true)
            }).catch(err=>{
                
            setSignUpResp(true)
            })
        console.log(formData);
    }

    if (signUpResp){
        return <Navigate to="/login" replace="true"/>
    }
    return (
        <>
        
            <div className="container loginForm">
                <br />
                <h3 className="container">SignUp as Tutor or Student</h3>
                <br />
                <form className="container" onSubmit={() => {
                    createUser()
                }
                } >

                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Name" id="Name" />
                        </Form.Group>
                        {/* <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last Name" />
                        </Form.Group> */}
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" id="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" id="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                    {/* <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Choose Image File</Form.Label>
                        <Form.Control type="file" size="sm"/>
                    </Form.Group> */}

                    {/* <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control size="sm" placeholder="Mobile Number" id="mob_num"/>
                    </Form.Group> */}

                    <Row className="mb-3">
                        <Button as={Col} variant="primary" type="submit" style={{ maxWidth: '20%', marginRight: '20px', marginLeft: '15px' }}
                            onClick={(e) => {
                                createUser(e)
                            }}
                        >
                            SignUp as User
                        </Button>
                        <Button as={Col} variant="success" type="submit" style={{ maxWidth: '20%' }}
                            onClick={(e) => {
                                createTutor(e)
                                // localStorage.setItem("User", JSON.stringify({"role":1}))
                                // window.location.reload()
                            }}
                        >
                            SignUp as Tutor
                        </Button>
                    </Row>
                    {/* <Button as={Col} variant="success" type="submit" style={{maxWidth: '20%'}}>
                        SignUp as Tutor
                    </Button> */}
                </form>
                <br />
                <br />
            </div>
        </>
    )
}

export default SignUpPage