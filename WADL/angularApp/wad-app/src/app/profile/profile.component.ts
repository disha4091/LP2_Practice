import { Component, OnInit } from '@angular/core';
import { json } from 'body-parser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var userInfo = (<HTMLInputElement>document.getElementById("userInfo")) ;
    var data = (localStorage.getItem("user"));
    var temp = data !== null ?JSON.parse(data):null;
    var output = '<h3>Name: ' + temp.name + ' </h3>' + '<h3> Email ' + temp.mail + ' </h3>'; 
    userInfo.innerHTML = output ;
  }

}
