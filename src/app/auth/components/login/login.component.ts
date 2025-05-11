import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
public name:string=''
constructor(private route:ActivatedRoute,private router:Router) {}

ngOnInit(){
  
}


}
