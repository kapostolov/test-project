import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
    constructor(private router: Router) { }
    loggedIn = false;
    loginFailed = false;

    checkCredentials(username: string, password: string){
        if(username==="testuser" && password ==='testpass'){
            this.loggedIn = true;
            this.loginFailed = false;
            this.router.navigate(['/home']);
        } else{
            this.loggedIn = false;
            this.loginFailed = true;
        }
    }

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                resolve(this.loggedIn);
            }
        );
        return promise;
    } 
    
    
}