import React, { useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';

function Professor_modal(props) {

    const [appointment, setAppointment] = useState()

    const data = props.tutorData.find(item => {
        return item._id === props.profDetail
    })  
    useEffect(() => {
        axios.get("http://localhost:5050/appointment/getAppointment/"+data._id).then(resp => {
            setAppointment(resp.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <Modal className='prof_detail_modal' isOpen={props.profDetail !== false ? true : false} toggle={() => props.toggleProfDetails(false)}>
            <ModalHeader toggle={() => props.toggleProfDetails(false)}>
                <span>{data?.name}</span>
                <p style={{ margin: '0', fontStyle: 'italic', fontSize: '0.8em' }}> Email: {data?.email}</p>
            </ModalHeader>
            <ModalBody>
                <h6 className='d-flex' style={{ fontSize: '0.9em' }}>Courses:</h6>
                {
                    <ul style={{ fontSize: '0.8em' }}>
                        {data?.courses.map(course => {
                            return <li>
                                {course.courseName}
                            </li>
                        })}
                    </ul>
                }
                {/* <h6 className='d-flex'>Email ID : {data.email}</h6> */}
                {/* <h6 className='d-flex'>Education : </h6>
                {
                    <ul >
                        {data.degrees.map(edu => {
                            return <li>
                                {edu}
                            </li>
                        })}
                    </ul>
                } */}
                <table style={{ width: '100%', fontSize: '0.9em' }}>
                    <tr>
                        <th>Course Code</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Booking</th>
                    </tr>
                    {
                        appointment?.map(date => {
                            return <tr style={{ marginBottom: '2em' }}>
                                <td>{date.courseCode}</td>
                                <td>{moment(date?.appointmentDate).format("MM/DD/YYYY")}</td>
                                <td>{date?.appointmentTime}</td>
                                <td><Button style={{ fontSize: '0.7em' }}>Book now!</Button></td>
                            </tr>
                        })}



                </table>
            </ModalBody>
        </Modal>

    )
}


export default Professor_modal