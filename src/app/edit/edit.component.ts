import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp={"No":"","Name":"","Address":""};

  constructor(public service:DataService,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
    let No=result.get("No");
    console.log(No);
    let observableResult=this.service.SelectByNo(No);
    observableResult.subscribe((found)=>{
      console.log(found[0])
      this.emp=found[0];
    })


    })
  }

OnUpdateCallMe(Entiredata)
{
  let observableResultupdate=this.service.Update(this.emp);
  observableResultupdate.subscribe((resultupdate)=>{
    console.log(resultupdate);
    this.router.navigate(['/home']);
  })
}

CancelUpdate()
{
  this.router.navigate(['/home']);
}

}
