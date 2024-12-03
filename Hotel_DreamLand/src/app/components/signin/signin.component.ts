import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  endpoint:string='user';
  data:any;
  validUser:any;
  notValidUser:boolean=false

  constructor(private apicallService: ApicallService, private router :Router){}

  ngOnInit(){
    this.getData();
  }
  submit(value:any){
  
    console.log(value);
      //this.router.navigateByUrl('/owner/ownerLanding')
      //this.validUser =[]
      this.data.find((ele:any)=>{
        if(value.userName == ele.name && value.pass == ele.password){
          console.log('confirm');
          //this.validUser.push(ele);
          this.router.navigateByUrl('/main') 
        } else{
           this.notValidUser = true;
        }
      })
      // if(this.validUser.length > 0){      
       //  this.router.navigateByUrl('/main')     
      // }else{
          // this.notValidUser = true;
      // }
  
  }
  getData(){
    this.apicallService.getApiCall(this.endpoint).subscribe(response=>{
      this.data=response
      console.log('this.data', this.data);     
    })
  }
}
