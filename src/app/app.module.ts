import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';

import {MatTabsModule} from '@angular/material/tabs';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatNativeDateModule} from '@angular/material/core';

import {NgIf, NgFor} from '@angular/common';

import {MatTableModule} from '@angular/material/table';

import { MatSortModule } from '@angular/material/sort';

import {MatPaginatorModule} from '@angular/material/paginator';

import {MatDividerModule} from '@angular/material/divider';
import { InputComponent } from './input/input.component';
import { BatchesComponent } from './batches/batches.component';
import { BatchtableComponent } from './batchtable/batchtable.component';
import { Batchtable1Component } from './batchtable1/batchtable1.component';
import { MatFormField } from '@angular/material/form-field';
import { Batchtable2Component } from './batchtable2/batchtable2.component';
import { CourseComponent } from './course/course.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherinputComponent } from './teacherinput/teacherinput.component';
import { StudentComponent } from './student/student.component';
import { Student1Component } from './student1/student1.component';
import { ProgramComponent } from './program/program.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceinputComponent } from './attendanceinput/attendanceinput.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ExamComponent } from './exam/exam.component';
import { Exam1Component } from './exam1/exam1.component';
import { AssignmentComponent } from './assignment/assignment.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    InputComponent,
    BatchesComponent,
    BatchtableComponent,
    Batchtable1Component,
    Batchtable2Component,
    CourseComponent,
    TeacherComponent,
    TeacherinputComponent,
    StudentComponent,
    Student1Component,
    ProgramComponent,
    AttendanceComponent,
    AttendanceinputComponent,
    ExamComponent,
    Exam1Component,
    AssignmentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,

    MatIconModule,

    MatButtonModule,

    MatTabsModule,

    MatDatepickerModule,

    MatInputModule,

    MatFormFieldModule,

    MatNativeDateModule,

    NgIf,

    NgFor,

    MatTableModule,

    MatSortModule,

    MatPaginatorModule,

    MatDividerModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
