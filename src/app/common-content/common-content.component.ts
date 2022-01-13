import { Component, OnInit } from '@angular/core';
import { book } from '../bookInfo';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-content',
  templateUrl: './common-content.component.html',
  styleUrls: ['./common-content.component.css']
})
export class CommonContentComponent implements OnInit {

  public message;
  public bookArray: book[];
  constructor(private bookServie: BookService, private router: Router) { }

  ngOnInit(): void {

    this.bookServie.allbook().subscribe(data => {
      this.bookArray = data;
    });

  }



  detail(object)
  { 
    this.router.navigate(['/detail']);
  }

}
