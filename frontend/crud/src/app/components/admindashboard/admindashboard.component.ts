import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  constructor(private http:HttpClient,private router:Router){}

  userdata!:any
  message=''
  ngOnInit(): void {
    this.http.get('http://localhost:4000/home').subscribe((res:any)=>{
      this.userdata=res.data
      console.log(res.data);
      
    },(err)=>{
      this.message=err.error.message
    })
  }


  searchtext=''
  deletefu(id:any){
    this.http.delete('http://localhost:4000/delete/'+id).subscribe((res:any)=>{
      this.message=res.message
      this.ngOnInit()
    },(err)=>{
      this.message=err.error.message
    })
  }

}
