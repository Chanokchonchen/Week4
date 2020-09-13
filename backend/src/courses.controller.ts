import { Controller, Get } from '@nestjs/common';
import {course } from "./type"
import { CoursesService } from './courses.service';
@Controller('courses')
export class CourseController {
  constructor(private coursesservice: CoursesService) {}
  @Get() 
  getCourses(): course[] {
    return this.coursesservice.getCourses();
  }
}