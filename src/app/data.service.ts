import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public helper:HttpClient) { }

  Select()
  {
    return this.helper.get("http://localhost:7777/stus");
  }

  SelectByNo(No)
  {
    return this.helper.get("http://localhost:7777/stus/"+No);
  }

  Update(empobj)
  {
    return this.helper.put("http://localhost:7777/stus/"+empobj.No,empobj);
  }

  Insert(empobj)
  {
    return this.helper.post("http://localhost:7777/stus",empobj);
  }

  Delete(No)
  {
    return this.helper.delete("http://localhost:7777/stus/"+No);
  }


}
