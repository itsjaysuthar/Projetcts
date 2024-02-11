import React, { useState } from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import FeedBack from './feedback_modal'

function Tutor  (props) {
  const [open, setOpen] = useState(false)
  const [added, setAdded] = useState(false)

  const addToFavHandler = () =>{
    setAdded(!added)
  }
  return (

    <>
        <div className="card mb-3 align-self-stretch" style={{maxWidth: '540px', marginLeft: '1em'}}>
            <div className="row g-0">
                <div className="col-lg-4">
                <img src={props.image} className="img-fluid rounded-start" alt="..." style={{float: 'left', width: '13em', height: '13.5em', objectFit: 'cover'}}/>
                </div>
                <div className="col-lg-8">
                <div className="card-body">
                    <h6 className="card-title" style={{margin: '0'}}>{props.name}</h6>
                    <p className="card-text" style={{fontStyle: 'italic', fontSize: '0.85em'}}>{props.position}</p>
                    {/* <br /> */}
                    <p className="card-text" style={{fontSize: '0.9em', margin: '0'}}>Email: {props.email} 
                    {/* <br /> */}
                    </p>
                    <p className="card-text">Rating: {props.rating}
                    </p>
                    {/* <p className="card-text">Courses : 
                      {
                        props.courses.map(item=>{
                          return <p>{item.courseName},</p>
                        })
                      }
                    </p> */}
                    <Row style={{marginTop: '2em'}}>
                      <Button as={Col} style={{fontSize: '0.5em', marginRight: '15px', marginLeft: '10px', paddingTop: '10px'}} onClick={()=>{
                        setOpen(props.id)
                      }}>FeedBack</Button>
                      <Button as={Col} style={{fontSize: '0.5em', marginRight: '15px', paddingTop: '10px'}} variant="success" onClick={()=>{
                        props.TutorModalVisibility()
                      }}>Appointments</Button>
                      <Button as={Col} style={{fontSize: '0.5em'}} variant={added? "success" :"warning"} onClick={()=>{
                        addToFavHandler()
                      }}>{added? "Remove from Favorites" :"Add to Favorites"}</Button>
                    </Row>
                </div>
                </div>
            </div>
        </div>

        {
          open && 
          <FeedBack id={open} 
          
          toggleProfDetails = {() =>{
            setOpen(false)
          }}
        />
        }
    </>

  )
}

export default Tutor