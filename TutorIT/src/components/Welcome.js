import axios from 'axios'
import React, { useEffect, useState }  from 'react'
import { Container } from 'react-bootstrap'
import { getLoginDetails } from './utils'

function Welcome(props) {

  const userName = getLoginDetails()?.role == 0 ? "Manav" : "Anjum"
  const hoursCompleted = getLoginDetails()?.role == 0 ? "35" : "75"
  const tutorRatings = getLoginDetails()?.role == 0 ? "" : "4.7"
  return (
    <Container>
        <br/>
        <h2>Welcome, {userName} !! Your Total tutoring hours completed: {hoursCompleted} {
          getLoginDetails()?.role == 0 ? "" : ", Ratings " + tutorRatings
        }</h2>
    </Container>
  )
}

export default Welcome;