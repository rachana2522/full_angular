import { Component , ViewChild ,ViewContainerRef } from '@angular/core';
import { AttendanceinputComponent } from '../attendanceinput/attendanceinput.component';
import { ExamComponent } from '../exam/exam.component';
import { AssignmentComponent } from '../assignment/assignment.component';
import { ReportComponent } from '../report/report.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  @ViewChild('container10',{read:ViewContainerRef,static:true})
  container10!:ViewContainerRef;

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
   this.container10.clear();
   this.container10.createComponent(AttendanceinputComponent)
}
var12=true;
Exam(){
     this.container10.clear()
     this.var12=false;
     this.container10.createComponent(ExamComponent)
  }

  assignment(){
    this.container10.clear()
    this.var12=false;
    this.container10.createComponent(AssignmentComponent)
  }

  report(){
    this.container10.clear()
    this.var12=false;
    this.container10.createComponent(ReportComponent)
  }
}
