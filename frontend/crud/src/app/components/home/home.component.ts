import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private activaterout:ActivatedRoute,private http:HttpClient){}

  id=''
  userdata:any
  ngOnInit(): void {
    this.activaterout.params.subscribe(params => {
      this.id = params['id'];
      alert(this.id)      
    });


    this.http.post('http://localhost:4000/getdata',{id:this.id}).subscribe((res:any)=>{
      this.userdata= res.data
    },(err)=>{
      console.log(err.error.message);
      
    })

  }

}
