import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isLogin: boolean = false
errorMessage
userInformation : any
constructor(
private _api: ApiService,
private _auth: AuthService,
private _router:Router
) { }
ngOnInit() {
  console.log("Router login called");
this.isUserLogin();
}
onSubmit(form: NgForm) {
console.log('Your form data : ', form.value);
this._api.loginPost('api/users/login', form.value).subscribe((res: any) => {
if (res.success == 1) {
this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
this._auth.setDataInLocalStorage('token', res.token);
this._router.navigate(['register']);
} else {
}
}, err => {
this.errorMessage = err['error'].message;
});
}
isUserLogin(){
console.log(this._auth.getUserDetails())
if(this._auth.getUserDetails() != null){
this.isLogin = true;
this.userInformation = this._auth.getUserDetails();
}
}
logout(){
this._auth.clearStorage()
this._router.navigate(['login']);
}
}
