import { Injectable } from '@nestjs/common';
import {course } from "./type"
@Injectable()
export class CoursesService {
    getCourses(): course[] {
        return[
             {id : "100" , title : "Math1"},
             {id : "200" , title : "Math2"},
             {id : "300" , title : "Math3"}
         ]
    }
}