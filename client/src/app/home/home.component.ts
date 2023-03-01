import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registermode =false;
  users:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:7087/api/users').subscribe({
      next:response=>this.users=response,
      error:error=>console.log(error),
      complete:()=>console.log("completed")
    })
  }
  toggleRegisterMode(){
    this.registermode=!this.registermode;
  }
  cancelRegisterMode( event:boolean){
    this.registermode=event;
  }
}
