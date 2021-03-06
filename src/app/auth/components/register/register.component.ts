import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
isLogin: boolean = false
isUserAdded: boolean = false
errorMessage
constructor(
private _api: ApiService,
private _auth: AuthService,
private _router:Router
) { }
ngOnInit() {
this.isUserLogin();
}
onSubmit(form: NgForm) {
console.log('Your form data : ', form.value);
var token = this._auth.getToken();
this._api.postTypeRequest('api/users', form.value, token).subscribe((res: any) => {
if (res.success == 1) {
console.log(res);
this.isUserAdded = true;
this._router.navigate(['register']);
} else {
console.log(res)
alert(res.msg)
}
}, err => {
this.errorMessage = err['error'].message;
});
}
isUserLogin(){
if(this._auth.getUserDetails() != null){
this.isLogin = true;
}
}
}
