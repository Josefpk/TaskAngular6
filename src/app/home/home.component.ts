import { Component, OnInit } from '@angular/core';
import { Globals } from "../global";
import { Router } from "@angular/router";
import { UserData } from './user';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public loginFormData: UserData;


    constructor(
        public globals: Globals,
        public router: Router
    ) {
        this.loginFormData=new UserData("",""); 
    }

    ngOnInit() {
        if (Object.keys(this.globals.current_user).length > 0) {
            this.router.navigate(["/navegacion"]);
        }
    }

    onLoginUser(){
        
        // TODO: verificar que loginFormData.user exista en this.globals.users
        // TODO: Verificar que la contraseña guardada sea igual a la de this.globals.users[x].password
        const user_found = this.globals.users.find(x => x.username == this.loginFormData.user);
        if (user_found && user_found.password === this.loginFormData.password) {
            console.log("USER FOUND: ", user_found);
            // TODO: Guardar información de usuario en localStorage (current_user) y en this.global.current_user
            const user_dict = {
                username: this.loginFormData.user,
                user: user_found.user
            };
            localStorage.setItem('current_user', JSON.stringify(user_dict));
            this.globals.current_user = user_dict;
            this.router.navigate(["/logged"]);
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
        
        // TODO: Redireccionar a navegacion

    }

}
