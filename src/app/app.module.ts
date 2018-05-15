import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing, appRoutingProviders } from './app.routing';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LoggedComponent } from './logged/logged.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksAddedComponent } from './tasks-added/tasks-added.component';

import { AddTask } from "./add-task/add-task";

import { Globals } from "./global";
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavegacionComponent,
        LoggedComponent,
        TaskComponent,
        AddTaskComponent,
        TasksAddedComponent,
        CalendarComponent,
        ProfileComponent
    ],
    imports: [
        routing,
        BrowserModule,
        FormsModule
    ],
    providers: [appRoutingProviders, Globals],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public globals: Globals) {
        // Verifies if current_user exists at localStorage
        if (localStorage.getItem("current_user")) {
            this.globals.current_user = JSON.parse(localStorage.getItem("current_user"));
        }

        // Verifies if users exists at localStorage
        if (localStorage.getItem("users")) {
            this.globals.users = JSON.parse(localStorage.getItem("users"));
        } else {
            localStorage.setItem("users", JSON.stringify([{
                user: "Pedrito Perez",
                username: "pedrito",
                password: "pedrito1"
            }, {
                user: "Juanito Ramirez",
                username: "juanito",
                password: "juanito1"
            }, {
                user: "Perensejo Ruiz",
                username: "perensejo",
                password: "perensejo1"
            }]));
            this.globals.users = JSON.parse(localStorage.getItem("users"));
        }

        // Init tasks
        this.globals.tasks = [
            new AddTask("Reunion Jose", "Capacitacion", new Date(), "Explanition GIT"),
            new AddTask("Reunion Exito", "Lidel de Proyecto", new Date(), "Explanition SASS")
        ];
    }
}
