import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class studentService{
    constructor(private http: HttpClient){
    }
      searchNames(): any{  
        return this.http.get("https://jsonplaceholder.typicode.com/users")
        .subscribe(res =>  console.log(res));
      }
}

