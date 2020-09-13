import React from "react"
import {Props } from "./type"
function Course(props : Props) {
    return <li>{props.number} {props.title}</li>
}

export default Course;