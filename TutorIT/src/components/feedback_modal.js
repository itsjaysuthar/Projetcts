import React from 'react'
import PropTypes from 'prop-types'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import axios from 'axios'
import {getLoginDetails} from './utils'
 
function feedback_modal (props) {

    const submitFeedback = () =>{
        const data = {
            "userId":getLoginDetails()?._id,
            "tutorId":props.id,
            "rating": document.getElementById("rating").value,
            "comment":document.getElementById("comment").value
        }
        axios.post("http://localhost:5050/user/addFeedback", {
            ...data
        }).then(resp=>{
            props.toggleProfDetails(false)
        }).catch(err=>{
            console.log(err);
        })
    }

  return (
    <>
        <Modal className='prof_detail_modal' isOpen={true} toggle={() => props.toggleProfDetails(false)}>
            <ModalHeader toggle={() => props.toggleProfDetails(false)}>
                <span>Feedback Form</span>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={()=>{
                    submitFeedback()
                }}>
                  <label>Ratings</label><br/>
                  <input type="text" id="rating"></input><br/>
                  <label>Comment</label><br/>
                  <input type="text" id="comment"></input><br/>
                  <br/>
                  <button type="submit">Submit</button>
                </form>
                {/* <h6 className='d-flex' style={{fontSize: '0.9em'}}>Courses:</h6>
                {
                    <ul style={{fontSize: '0.8em'}}>
                        {data.subject_of_expertise.map(course => {
                            return <li>
                                {course}
                            </li>
                        })}
                    </ul>
                } */}
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
                {/* <table style={{width: '100%', fontSize: '0.9em'}}>
                    <tr>
                        <th>Course Code</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Booking</th>
                    </tr>
                    {
                        data.available_hours.map(date => {
                            return <tr style={{marginBottom: '2em'}}>
                                <td>{date.courseCode}</td>
                                <td>{date.Date}</td>
                                <td>{date.Start_time} - {date.End_time}</td>
                                <td><Button style={{fontSize: '0.7em'}}>Book now!</Button></td>
                            </tr>
                        })
                    }


                </table> */}

            </ModalBody>
        </Modal>
    </>
  )
}

export default feedback_modal