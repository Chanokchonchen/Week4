import { CpuInfo } from "os";
import React, { useState } from "react";
import {course} from "./type"
import {PropsCourseFrom } from "./type"
function CourseForm(props : PropsCourseFrom) {
    const emptyContent : course = {number : "" , title : ""}
    const [content,setContent] = useState<course>(emptyContent)
    function handleChange(event : React.ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const value = event.target.value;
        setContent(prev => {
              return {...prev,[name] : value}
        })
    }
    function handleSubmitForm(event : React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                Number : <input onChange={handleChange} type="text"  value={content.number} name="number" /><br />
                Title : <input onChange={handleChange} type="text"  value={content.title} name="title" /><br />
                <button onClick={()=> {
                    console.log("Submit")
                    console.log(content)
                    props.getFormCourse(content)
                    setContent(emptyContent)
                    
                }}>Submit</button>
            </form>
        </div>
    )
}
export default CourseForm;