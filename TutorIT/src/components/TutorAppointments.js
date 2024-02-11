import React, { useState, useEffect } from 'react'
import {Table} from 'react-bootstrap'

function TutorAppointments (props) {

    const [appointments, setAppointments] = useState([]);

    const getData=()=>{
        fetch('json/tutorAppointments.json'
        ,{
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            // console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            // console.log(myJson);
            setAppointments(myJson)
          });
      }

      useEffect(()=>{
        getData()
      },[])
    
    return (
        <>
            <hr/>
            <div className='container'>
                <br/>
                <h3>Upcoming appointments</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Student Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Time</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr> */}
                        {
                            appointments.map((app, index) => {
                                // console.log(app);
                                return(
                                    <tr>
                                        <td>{app["courseCode"]}</td>
                                        <td>{app["userName"]}</td>
                                        <td>{app["appointmentDate"]}</td>
                                        <td>{app["appointmentLocation"]}</td>
                                        <td>{app["appointmentTime"]}</td>
                                        <td>{app["appointmentDuration"]}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <br/>
            </div>
        </>
    )
}

export default TutorAppointments