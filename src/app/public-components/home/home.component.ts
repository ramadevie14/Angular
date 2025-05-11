import { Component, Inject, inject } from '@angular/core';
import { CounterService } from '../../shared/services/counter.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

constructor(public _counterService: CounterService,
  @Inject('apptitle') public config : any
) {
  
 
}
ngOnInit()
{
}
  public increament(){
    this._counterService.incCounter();
  }
  public deccreament(){
    this._counterService.decCounter();
  }

}

