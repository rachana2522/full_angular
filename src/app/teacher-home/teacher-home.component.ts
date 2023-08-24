import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { AttendanceinputComponent } from '../attendanceinput/attendanceinput.component';
interface Course {
  code: string;
  courseName: string;
  completedTopics: string;
  topicsInProgress: string;
  completionPercentage: number;
}
interface Course1 {
  code: string;
  courseName: string;
  completedTopics: number;
  topicsInProgress: string;
  completionPercentage: number;
}
interface Count{
  code1:number;
  code2:number;
}
@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHOmeComponent {
  
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
div6=false;
  onSelected4(value:string): void {
		this.selectedTeam = value;

  
  this.div6=true;
  console.log(this.val1)
  console.log(this.val2)
  
   
	}
AddAttendance(){
   this.container10.clear();
   this.container10.createComponent(AttendanceinputComponent)
}


courses: Course[] = [
  { code: 'C001', courseName: 'Angular Basics', completedTopics: "Variables and Operators", topicsInProgress: "3", completionPercentage: 62 },
  { code: 'C002', courseName: 'Bootstrap Fundamentals', completedTopics: "External Files, Sessions and Cookies", topicsInProgress: "0", completionPercentage: 89 },
  // Add more courses as needed
];
completedTopicsArray: string[] = this.courses.map(course => course.completedTopics);

val1 = this.completedTopicsArray[0].split(',').length;
val2 = this.completedTopicsArray[1].split(',').length;
courses1: Course1[] = [
  { code: 'C001', courseName: 'Angular Basics', completedTopics: this.val2, topicsInProgress: "Externals File", completionPercentage: 62 },
  { code: 'C002', courseName: 'Bootstrap Fundamentals', completedTopics: this.val1, topicsInProgress: "NA", completionPercentage: 89 },
  // Add more courses as needed
];








sortColumn: keyof Course = 'code';
sortDirection: number = 1;

sortTable(column: keyof Course) {
 
  if (this.sortColumn === column) {
    this.sortDirection = -this.sortDirection;
  } else {
    this.sortColumn = column;
    this.sortDirection = 1;
    
  }

  this.courses.sort((a, b) => {
    const valA = a[column];
    const valB = b[column];
    return this.sortDirection * (valA > valB ? 1 : valA < valB ? -1 : 0);
  });
}

getSortIcon(column: keyof Course): string {
  if (this.sortColumn === column) {
    return this.sortDirection === 1 ? 'fa fa-sort-asc' : 'fa fa-sort-desc';
  }
  return 'fa fa-sort';
}

homepart=true;
onExams(){
this.homepart=false;
}
onHome(){
  this.homepart=true;
}
}
