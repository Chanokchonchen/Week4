import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseController } from './courses.controller';
import { CoursesService } from './courses.service';
@Module({
  imports: [],
  controllers: [AppController,CourseController],
  providers: [AppService,CoursesService],
})
export class AppModule {}
