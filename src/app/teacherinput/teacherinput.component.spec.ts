import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherinputComponent } from './teacherinput.component';

describe('TeacherinputComponent', () => {
  let component: TeacherinputComponent;
  let fixture: ComponentFixture<TeacherinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
