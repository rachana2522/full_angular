// import { JsonPipe } from '@angular/common';
// import { Component } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatDialog } from '@angular/material/dialog';

// export interface PeriodicElement {

//   Actions: string;

//   Assignmentname: string;

//   Totalmark: string;

//   Date: string;

//   Time: string;

//   File: string;

// }
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {

  Actions: string;

  Code: string;

  CourseName: string;

  TheoryTime: string;

  PractiseTime: string;

  Description: string;

  Topics: string;

}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  // constructor() {

  //   const storedEntries = localStorage.getItem('entries');
  //   if (storedEntries) {
  //     this.entries = JSON.parse(storedEntries);
  //   }

  // }

  // entries: any[] = [];


  // Assignmentname: string = '';
  // Totalmark: string = '';
  // Date: string = '';
  // Time: string = '';
  // File: string = '';



  // obj = {
  //   Assignmentname: '',
  //   Totalmark: '',
  //   Date: '',
  //   Time: '',
  //   File: ''
  // }

  // ELEMENT_DATA: PeriodicElement[] = [

  //   { Actions: '', Assignmentname: '', Totalmark: '', Date: '', Time: '', File: '' },



  // ];

  // displayedColumns: string[] = ['Actions', 'Assignment name', 'Totalmark', 'Date', 'Time', 'File'];

  // dataSource = new MatTableDataSource(this.ELEMENT_DATA);


  // onLocalstorage() {



  //   this.obj.Assignmentname = this.Assignmentname;
  //   this.obj.Totalmark = this.Totalmark;
  //   this.obj.Date = this.Date;
  //   this.obj.Time = this.Time;
  //   this.obj.File = this.File

  //   sessionStorage.setItem("obj", JSON.stringify(this.obj));

  //   const personCopy = { ...this.obj };
  //   this.entries.push(personCopy)


  //   this.isDisabled = true;


  //   console.log(this.entries)
  // }


  // deleteRow(row: any) {
  //   const index = this.entries.indexOf(row);
  //   if (index !== -1) {
  //     this.entries.splice(index, 1);
  //     console.log('Deleted:', row);
  //   }

  // }

  // // for editing a row 

  // isDisabled: boolean = false;

  // editRow(row: any) {
  //   const index = this.entries.indexOf(row);


  //   this.isDisabled = !this.isDisabled;



  //   console.log(index)
  //   console.log(this.entries[index].code)

  //   if (!this.isDisabled) {
  //     this.Assignmentname = row.Assignmentname
  //     this.Totalmark = row.Totalmark
  //     this.Date = row.Date
  //     this.Time = row.Time
  //     this.File = row.File
  //   }
  //   if (this.isDisabled) {

  //     this.entries[index].Assignmentname = this.Assignmentname
  //     this.entries[index].Totalmark = this.Totalmark
  //     this.entries[index].Date = this.Date
  //     this.entries[index].descriptions = this.Time
  //     this.entries[index].File = this.File


  //   }

  // }

  constructor(){
    
    const storedEntries = localStorage.getItem('entries');
      if (storedEntries) {
        this.entries = JSON.parse(storedEntries);
      }
     
    }

  entries: any[] = [];
  

  code:string ='';
  course:string ='';
  Theorytime:string =''
  practisetime:string ='';
  descriptions:string ='';
  topics:string ='';
 
    
 
 obj = {
   code:'',
   course:'',
   Theorytime:'',
   practisetime:'',
   descriptions:'',
   topics:''
}

  ELEMENT_DATA: PeriodicElement[] = [

    { Actions: '', Code: '', CourseName: '', TheoryTime: '', PractiseTime: '', Description: '', Topics: ''},

   

  ];
  
  displayedColumns: string[] = ['Actions','Code', 'CourseName', 'TheoryTime','PractiseTime','Description','Topics'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);


  onLocalstorage(){
    
    

     this.obj.code=this.code;
     this.obj.course=this.course;
     this.obj.Theorytime=this.Theorytime;
     this.obj.practisetime=this.practisetime;
     this.obj.descriptions=this.descriptions;
     this.obj.topics=this.topics
     
    sessionStorage.setItem("obj", JSON.stringify(this.obj));
  
    const personCopy = { ...this.obj};
    this.entries.push(personCopy)


    this.isDisabled=true;

      
      console.log(this.entries)
  }


  deleteRow(row: any) {
    const index = this.entries.indexOf(row);
    if (index !== -1) {
      this.entries.splice(index, 1);
      console.log('Deleted:', row);
    }
  
  }

// for editing a row 

isDisabled: boolean = false; 

  editRow(row: any) {
    const index = this.entries.indexOf(row);
    
    
    this.isDisabled = !this.isDisabled;


   
    console.log(index)
    console.log(this.entries[index].code)
   
    if(!this.isDisabled){ 
      this.code=row.code
      this.course=row.course
      this.Theorytime = row.Theorytime
      this.practisetime = row.practisetime
      this.descriptions = row.descriptions
      this.topics= row.topics
    }
    if(this.isDisabled){
     
    this.entries[index].code = this.code
    this.entries[index].course=this.course
    this.entries[index].Theorytime=this.Theorytime
    this.entries[index].practisetime=this.practisetime
    this.entries[index].descriptions=this.descriptions
    this.entries[index].topics=this.topics
   
    
    }
    
  }





}


