import { Injectable } from '@angular/core';


export class CounterService {
  public counter : number=0;
    static useFactory: any;
  constructor() { }

  public incCounter(): void{
    this.counter++;
  }

  public decCounter(): void{
    this.counter--;
  }
}
