import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './studentOptions.css'
import {getLoginDetails} from './utils'
const StudentOptions = (props) => {
  console.log();
  return (
    <Container>
        {/* <br/> */}
        <>
          {
            (getLoginDetails()?.role ==1) ?
            <>
              <Button className='btn-square-md' variant="danger">Update Profile</Button>
              <Button className='btn-square-md' variant="danger">Add appointments</Button>
            </> : 
            <>
              <Button className='btn-square-md' variant="danger">Search Tutors</Button>
              <Button className='btn-square-md' variant="danger">Favourites</Button>
            </>


          }
          {/* <Button className='btn-square-md' variant="danger">Update Profile</Button>
<Button className='btn-square-md' variant="danger">Add appointments</Button> */}
        </>

        
    </Container>
  )
}

export default StudentOptions