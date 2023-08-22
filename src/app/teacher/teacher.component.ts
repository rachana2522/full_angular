import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { BatchtableComponent } from '../batchtable/batchtable.component';
import { TeacherinputComponent } from '../teacherinput/teacherinput.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent {
 

  @ViewChild('container3',{read:ViewContainerRef,static:true})
  container3!:ViewContainerRef
  onAddBatch(){
    this.container3.clear()
  this.container3.createComponent(TeacherinputComponent)
  }
}





