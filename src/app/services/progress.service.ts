import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {progress_data} from "../mocks/progress_data"
import{ Progress} from "../models/progress"
@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor() { }


  // load progress of knowledge  (mocks)
  get_progress(): Observable<Progress[]>{
    const progress_list = of (progress_data);
    return progress_list;
  }
}
