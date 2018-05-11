import { Component, OnInit } from '@angular/core';
import { Globals } from "../global";
import { Router } from "@angular/router";

@Component({
    selector: 'app-navegacion',
    templateUrl: './navegacion.component.html',
    styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

    constructor(
        public globals: Globals,
        public router: Router
    ) { }

    ngOnInit() {
        if (Object.keys(this.globals.current_user).length <= 0) {
            this.router.navigate(["/"]);
        }
    }

    onLogOut () {
        localStorage.removeItem("current_user");
        this.router.navigate(["/home"]);
    }
}
