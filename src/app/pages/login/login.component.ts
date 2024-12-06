import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName: '',
    password: '',
    emailId:'',
  }

  userLogin: any ={
    userName: '',
    password: '',

  }

  router = inject(Router);

  onRegister(){
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray))
    } else{
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray))
    }
    alert("Registration Sucessful");

  }

  onLogin(){
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null) {
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find((m:any)=> m.userName == this.userLogin.userName && m.password == this.userLogin.password);
      if (isUserFound != undefined) {
        this.router.navigateByUrl('dashboard')
      } else {
        alert("Username or Password is wrong")
      } 
  } else {
    alert("User not Found")

  }

}

}
