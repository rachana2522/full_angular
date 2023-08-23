import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router'
import { AttendanceinputComponent } from '../attendanceinput/attendanceinput.component';
import { Exam1Component } from '../exam1/exam1.component';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
  @ViewChild('container11',{read:ViewContainerRef,static:true})
  container11!:ViewContainerRef;
  Exam(){
     this.container11.clear()
     this.container11.createComponent(ExamComponent)
  }
  div1=true;
  div2=false;
  div3=false;
  div4= false;
  div5=false;
  
  selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;

   
    this.div2=true;
	}
  onSelected1(value:string): void {
		this.selectedTeam = value;

   
    this.div2=true;
    this.div3=true;
    
	}
  onSelected2(value:string): void {
		this.selectedTeam = value;

  
    this.div2=true;
    this.div3=true;
    this.div4=true
   
	}
  emit(){
    
  }
  onSelected3(value:string): void {
		this.selectedTeam = value;

  
    this.div2=true;
    this.div3=true;
    this.div4=true;
    this.div5=true;
   
	}

AddAttendance(){
   this.container11.clear();
   this.container11.createComponent(Exam1Component)
}

var12=true;

}
