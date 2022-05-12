import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  regFunc(){
    var name1 = (<HTMLInputElement>document.getElementById("name")).value;
    var mail1 = (<HTMLInputElement>document.getElementById("mail")).value;
    var arr = {"name":name1, "mail":mail1}
    localStorage.setItem("user", JSON.stringify(arr) );
  }
}
