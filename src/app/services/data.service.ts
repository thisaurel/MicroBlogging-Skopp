import { Injectable } from '@angular/core';
import * as data from '../data/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public get posts(): any {
    return data;
  }

}
