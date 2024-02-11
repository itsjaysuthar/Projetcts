import React, { useState, useEffect } from 'react'
import Tutor from './Tutor';
import { Form, FormControl, Button, Col, Row, Container } from 'react-bootstrap';
import './tutors.css';
import _ from 'lodash'
import Tutor_Modal from './tutor_modal'
import axios from 'axios';

function FindTutors(props) {

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [length, setLength] = useState()
  const [allTutors, setAll] = useState()
  const [tutorModal, setTutorModal] = useState(false)

  const getData = () => {
    axios.get('http://localhost:5050/tutors/getTutor'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (myJson) {
        // console.log(myJson);
        setData(myJson.data)
        setFiltered(myJson.data)
        setLength(Object.keys(myJson.data).length)
      });
  }
  useEffect(() => {
    getData()
  }, [])


  useEffect(() => {
    console.log(">> filteretd : ", filtered);
    if (filtered) {

      const temp = filtered.map((tutor, index) => {
        return (
          <div
          // onClick={(e)=>{
          //   e.preventDefault()
          //   // console.log("ghcfhfvjfgjgjvg",index);
          //   setTutorModal(tutor["_id"])
          // }}
          >
            <Tutor
            id={tutor["_id"]}
              name={tutor["name"]}
              image={tutor["image"]}
              position={tutor["position"] || '1'}
              email={tutor["email"]}
              rating={tutor["rating"]}
              courses={tutor["courses"]}
              TutorModalVisibility={() => {
                setTutorModal(tutor["_id"])
              }}
            />
          </div>
        )
      })

      setAll(temp)
    }
  }, [filtered])

  const onChangeSearchInput = async (evt) => {
    const searchVal = evt.target.value
    const temp = await data.filter(item => {
      const lower = item.courses.map(item => item.courseName.toLowerCase())
      return item.name.toLowerCase().includes(searchVal.toLowerCase()) || lower.find(item1 => item1.includes(searchVal.toLowerCase()))
    })

    setFiltered(temp)
  };

  return (
    <>
      <br />
      <div className='container'>

        <Row>
          <Form className="d-flex" as={Col}>
            <FormControl
              type="search"
              placeholder="Search Tutor/Course Name"
              className="me-2"
              aria-label="Search"
              onChange={(e) => onChangeSearchInput(e)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {/* <Button as={Col} variant="outline-success">Favourites Tutors</Button> */}
        </Row>
        <br />
      </div>
      {/* {console.log(">>> data : ", data)} */}
      <Container>
        {

          <div className='tutors'>
            {allTutors}
          </div>

        }

      </Container>
      {
        tutorModal !== false &&

        <Tutor_Modal profDetail={tutorModal} tutorData={filtered} toggleProfDetails={() => {
          setTutorModal(false)
        }} />
      }
    </>
  )
}

export default FindTutors