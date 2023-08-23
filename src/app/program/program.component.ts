
import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {
  constructor(private rout:Router){}
  title = 'course-page';
  @ViewChild('container1',{read:ViewContainerRef,static:true})
  container1!:ViewContainerRef;
  @ViewChild('container2',{read:ViewContainerRef,static:true})
  container2!:ViewContainerRef;
  @ViewChild('container5',{read:ViewContainerRef,static:true})
  container5!:ViewContainerRef;
onAddTopic(){
  this.container1.clear()
  this.container1.createComponent(InputComponent)
}


}
