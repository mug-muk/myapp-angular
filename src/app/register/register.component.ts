import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:DataService,
    public route:ActivatedRoute,
    public router:Router) { }

  message="";
  ngOnInit() {
  }

  OnAddCallMe(EntireContent)
  {
    let empobj=EntireContent.form.value;
    let observableResult=this.service.Insert(empobj);
    observableResult.subscribe((result:any)=>{
      console.log(result);
      if(result.name=="ValidationError")
      {
        this.message="invalid data";
      }
      else
      {
        this.message="valid";
      }
     
    }) 
  }

  GoBackHome()
  {
    this.router.navigate(['/home']);
  }



}
