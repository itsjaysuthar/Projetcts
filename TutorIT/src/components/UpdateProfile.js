import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const UpdateProfile = props => {
    const [selected, setSelected] = useState()
    const optionsArray = [
        { key: "CS6360", label: "Database Design" },
        { key: "CS6363", label: "Design and Analysis of Algorithms" },
        { key: "CS6375", label: "Machine Learning" }
      ];
  return (
        <>
        <div className="container loginForm">
            <br/>
            <h3 className="container">Update Profile</h3>
            <br/>
            <Form className="container" onSubmit={(e)=>{
                e.preventDefault()
                // console.log(e.target)
                const data = {
                    Name : document.getElementById("Name").value,
                    Position : document.getElementById("Name").value,
                    About: document.getElementById("About").value,
                    file : document.getElementById("file").value,
                    courses: optionsArray[0]
                }
console.log(data);
                axios.put("http://localhost:4000/tutors/updateTutor/"+String("627dad163ff154b6f4d838e9"),
                   {data
                }).then(resp=>{
                    alert("data updated successfully!")
                }).catch(err=>{
                    console.log(err);
                    alert("data updated successfuly!")
                })
                // alert("Data updated successfully!")
            }}>
                
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
                <Form.Group as={Col} className="mb-3" controlId="formGridPosition">
                    <Form.Label>Position</Form.Label>
                    <Form.Control placeholder="Position" id="Position" />
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formGridAbout">
                    <Form.Label>About</Form.Label>
                    <Form.Control placeholder="About" id="About" />
                </Form.Group>
                {/* <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row> */}

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
            
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Choose Image File</Form.Label>
                    <Form.Control type="file" size="sm" id="file"/>
                </Form.Group>

                {/* <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control size="sm" placeholder="Mobile Number"/>
                </Form.Group> */}

                {/* <Row className="mb-3">
                    <Button as={Col} variant="primary" type="submit" style={{maxWidth: '20%', marginRight: '20px', marginLeft:'15px' }}>
                        SignUp as User
                    </Button>
                    <Button as={Col} variant="success" type="submit" style={{maxWidth: '20%'}}>
                        SignUp as Tutor
                    </Button>
                </Row> */}

                {/* <Form.Group as={Col} controlId="my_multiselect_field">
                    <Form.Label>Courses</Form.Label>
                    <Form.Control as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
                        <option value="field1">CS6360 - Database Design</option>
                        <option value="field2">CS6363 - Design and Analysis of Algorithm</option>
                        <option value="field3">CS6375 - Machine Learning</option>
                    </Form.Control>
                </Form.Group> */}
                <Form.Group as={Col} className="mb-3" controlId="formGridCourses">
                    <Form.Label>Courses</Form.Label>
                    <DropdownMultiselect options={optionsArray} id="courses" onChange={(s)=>{
                        setSelected(s)
                    }}  />
                </Form.Group>
                <br/>
                <input as={Col} variant="success" type="submit" style={{maxWidth: '20%'}} 
                value="Update Profile"
                />
                
                            </Form>
            <br/>
            <br/>
        </div>
        </>
  )
}

UpdateProfile.propTypes = {}

export default UpdateProfile