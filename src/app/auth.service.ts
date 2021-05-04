import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class AuthService{
    loggedIn = false;
    loginFailed = false;
    private loggedSubject: BehaviorSubject<string>;
    public logged: Observable<string>;

    constructor(private router: Router) {
        this.loggedSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('logged')));
        this.logged = this.loggedSubject.asObservable();
     }

    checkCredentials(username: string, password: string){
        if(username==="testuser" && password ==='testpass'){
            this.loggedIn = true;
            this.loginFailed = false;
            this.router.navigate(['/home']);
            localStorage.setItem('logged','true');
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

    LogOut(){
        localStorage.removeItem('logged');
        this.loggedIn = false;
        this.router.navigate(['/']);
    }
    
    
}