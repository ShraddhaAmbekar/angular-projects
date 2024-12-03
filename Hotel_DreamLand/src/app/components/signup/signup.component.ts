import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/shared/apicall.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!:FormGroup;
  misMatch=true;
  user: any;


  constructor(private formBuilder:FormBuilder, private apicallService:ApicallService){}
  
  ngOnInit(){
    this.formLoad();
    
   };
   
   formLoad(){
     this.signupForm = this.formBuilder.group({
       name : ['',[Validators.required]],
       email : ['',[Validators.required]],
       password : ['',[Validators.required]],
       confirmPassword : ['',[Validators.required]],
       checkbox :[true],
       
     })
   };

   submit(value:any){
    //console.log(value);
    let endpoint='user';
    this.apicallService.postApiCall(endpoint,value).subscribe(res=>{
      console.log(res)
    })
  
  }

  matchPassword(){
    if(this.signupForm.value.password==this.signupForm.value.confirmPassword){
      this.misMatch = false    
    }else{
      this.misMatch = true
    }
  }


}
