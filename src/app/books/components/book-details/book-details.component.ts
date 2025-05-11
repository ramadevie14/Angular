import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: false,
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
public id:number=0;
public authorId:number=0;
public name:string='';
  constructor(private route:ActivatedRoute){}
  

  ngOnInit(){
    this.route.params.subscribe((param)=>{
      this.id=param['id'];
    })

    

  }
}
