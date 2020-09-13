import React, { useState, useEffect } from "react";
import Course from "../components/Course"
import axios from "axios"
import {course } from "./type"
import CourseForm from "./CourseForm"
function Courses() {
    const [courses,setCourses] = useState<course[]>([])
    function getCourses() {
        axios.get(`http://localhost:3000/courses/`)
      .then(res => {
        setCourses(res.data);
      })
    }
    function getFormCourse(course : course) {
        setCourses((prev : course[]) => {
            return [...prev , course]
        })
    }
    useEffect(()=>{
        getCourses();
        console.log("Mount")
    },[])
    return (
        <div>
            <h1>All Courses</h1>
            <ul>
            {courses.map((course ,index) => {
                return <Course  key={index} {...course} />
            }  )}
            </ul>
            <CourseForm getFormCourse={getFormCourse}/>

        </div>
    )

}
export default Courses;