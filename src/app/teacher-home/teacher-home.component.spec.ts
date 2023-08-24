import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherHOmeComponent } from './teacher-home.component';

describe('TeacherHOmeComponent', () => {
  let component: TeacherHOmeComponent;
  let fixture: ComponentFixture<TeacherHOmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherHOmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherHOmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
