import React from "react"
import {Props } from "./type"
import {A} from 'hookrouter'
function Course(props : Props) {
    return (
        <div>
            <li>
                <A href={`/review/${props.id}`}>{props.number} {props.title}</A>   
            </li>
        </div>
    )

}


export default Course;