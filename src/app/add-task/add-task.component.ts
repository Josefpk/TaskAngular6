import { Component, OnInit } from '@angular/core';
import { AddTask } from './add-task';
import { Globals } from "../global";

declare var jQuery: any;

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public addTask: AddTask;

  constructor(
    public globals: Globals
  ) { 
    this.addTask = new AddTask("", "", new Date(),"");
  }

  ngOnInit() {
  }


  onAddTask () {
    //localStorage.setItem("task", JSON.stringify([{name: "name1", pass: "pass1"}, {name: "name2", pass: "pass2"}])); //localstorage carlos
    //this.addTask.fechaLimite = new Date(this.addTask.fechaLimite);
    this.globals.tasks.push(this.addTask);
    localStorage.setItem("task", JSON.stringify(this.globals.tasks));
    this.addTask = new AddTask("","", new Date(),"");
    //ocultar el modal cuando se agregue una tarea. 
    jQuery(".modal").modal("hide");
  }
}
