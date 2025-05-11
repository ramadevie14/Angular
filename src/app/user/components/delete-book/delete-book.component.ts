import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  standalone: false,
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})
export class DeleteBookComponent  {
  userid: string = '';
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.parent?.params.subscribe(param => {
      console.log(param);
      this.userid = param['userId'];
    })



  }
}
