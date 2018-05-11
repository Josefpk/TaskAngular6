import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAddedComponent } from './tasks-added.component';

describe('TasksAddedComponent', () => {
  let component: TasksAddedComponent;
  let fixture: ComponentFixture<TasksAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
