import { ObjectID } from "mongodb";
import React, {useEffect, useState} from "react";
import { PropsReviewCourse , course} from "./type";
import axios from "axios";
function Reviewcourse(props : PropsReviewCourse) : JSX.Element {
    const [name,setName] = useState<String>("")
    async function getAttr(courseID : ObjectID) {
        const res = await axios.get(`http://localhost:3000/courses/`)
        const courselists = res.data as course[]
        const course = courselists.filter((course) => {
            return course.id === props.courseID
        })
        setName(course[0].title)
    }
    useEffect(()=> {
        getAttr(props.courseID);
    })
    return (
        <div>
            <h1>Course Review</h1>
            <h3>Name = {name}</h3>
        </div>
    )
}
export default Reviewcourse;