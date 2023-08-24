import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherexamtableComponent } from './teacherexamtable.component';

describe('TeacherexamtableComponent', () => {
  let component: TeacherexamtableComponent;
  let fixture: ComponentFixture<TeacherexamtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherexamtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherexamtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
