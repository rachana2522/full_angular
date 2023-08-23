import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ExamComponent } from './exam/exam.component';
import { AssignmentComponent } from './assignment/assignment.component';


const routes: Routes = [{path:'',component:WelcomeComponent},
{path:'home',component:HomeComponent},
{path:'attendace',component:AttendanceComponent},
{path:'exam',component:ExamComponent},
{path:'assignment',component:AssignmentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
