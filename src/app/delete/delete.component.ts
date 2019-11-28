import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public service:DataService,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((result)=>{
    let No=result.get("No");
    console.log(No);
    let observableResult=this.service.Delete(No);
    observableResult.subscribe((found)=>{
      console.log(found);
    
      
    })


    })
  }

}
