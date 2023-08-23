import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceinputComponent } from './attendanceinput.component';

describe('AttendanceinputComponent', () => {
  let component: AttendanceinputComponent;
  let fixture: ComponentFixture<AttendanceinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
