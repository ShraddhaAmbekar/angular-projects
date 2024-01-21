import { Component } from '@angular/core';
import { ApicallService } from '../shared/apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private apicallService: ApicallService, private router :Router){}

  submit(value:any){
  
    console.log(value);
      this.router.navigateByUrl('/owner/ownerLanding')
  
  }
}
