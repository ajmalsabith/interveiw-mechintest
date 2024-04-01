import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router ,} from '@angular/router';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient){}

  
  registerform!:FormGroup
  message=''
  selectedImage1!:File

  
  
  ngOnInit(): void {
    console.log('haoo');
    
    this.registerform= new FormGroup({
      name:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password2:new FormControl('',Validators.required)
    })
    console.log(this.registerform);
    
  }

  uploadImage(files: any) {
    this.selectedImage1=<File>files.files[0]
  }

  submit(){
    let user= this.registerform.getRawValue()

    const formdata=new FormData()
    formdata.append('name',user.name)
    formdata.append('phone',user.phone)
    formdata.append('email',user.email)
    formdata.append('password',user.password)
    formdata.append('image',this.selectedImage1,this.selectedImage1.name)
    console.log(formdata+'fomrdata');

    console.log('working');
    
    this.http.post('http://localhost:4000/register',formdata).subscribe((res:any)=>{
       this.message= res.message
      this.router.navigate(['login'])
    },(err)=>{
       this.message=err.message
      
    })
  }
}
