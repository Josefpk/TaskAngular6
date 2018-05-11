import { Component, OnInit } from '@angular/core';
import { Globals } from "../global";
import { AddTask } from '../add-task/add-task';

@Component({
  selector: 'app-tasks-added',
  templateUrl: './tasks-added.component.html',
  styleUrls: ['./tasks-added.component.scss']
})
export class TasksAddedComponent implements OnInit {

  constructor(
    public globals: Globals
  ) {
  }
  
  ngOnInit() {
  }

  removeTask(index:number){
    /* let obj_test = JSON.parse(localStorage.getItem("task"));  // localstorage carlos
     console.log("obj_test: ", obj_test);*/
     this.globals.tasks.splice(index, 1);
   }

}
