import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { BatchtableComponent } from '../batchtable/batchtable.component';
import { Student1Component } from '../student1/student1.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @ViewChild('container3',{read:ViewContainerRef,static:true})
  container3!:ViewContainerRef
  onAddBatch(){
    this.container3.clear()
  this.container3.createComponent(Student1Component)
  }
}

