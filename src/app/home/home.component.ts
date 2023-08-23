import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { BatchesComponent } from '../batches/batches.component';
import { Router } from '@angular/router';
import { TeacherComponent } from '../teacher/teacher.component';
import { StudentComponent } from '../student/student.component';
import { ProgramComponent } from '../program/program.component';

  


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private rout:Router){}
  title = 'course-page';
  @ViewChild('container1',{read:ViewContainerRef,static:true})
  container1!:ViewContainerRef;
  @ViewChild('container2',{read:ViewContainerRef,static:true})
  container2!:ViewContainerRef;
  @ViewChild('container5',{read:ViewContainerRef,static:true})
  container5!:ViewContainerRef;
  @ViewChild('container6',{read:ViewContainerRef,static:true})
  container6!:ViewContainerRef;
onAddTopic(){
  this.container1.clear()
  this.container1.createComponent(InputComponent)
}
content=true
 batch(){
     this.container2.clear()
     this.container5.clear()
     this.container6.clear()
     this.container2.createComponent(BatchesComponent)
 }
oncourse(){
  this.container2.clear()
  this.container5.clear()
  this.container6.clear()
  
  this.container6.createComponent(ProgramComponent) 
  console.log('hii i am running')
   
}
onTeacher(){
  this.container2.clear()
     this.container5.clear()
     this.container6.clear()
  this.container5.createComponent(TeacherComponent)
}

onStudent(){
  this.container2.clear()
     this.container5.clear()
     this.container6.clear()
  this.container5.createComponent(StudentComponent)
}

}

