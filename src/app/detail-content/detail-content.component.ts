import { Component, OnInit } from '@angular/core';
import { book } from '../bookInfo';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent implements OnInit {


  public hasparameter: boolean;
  public bookId : Number;
  public book : book;

  constructor(private bookService: BookService, private _avtivatedRoute: ActivatedRoute) { }

  
  ngOnInit(): void {  }


  

  searchbook() {
    this.hasparameter = this._avtivatedRoute.snapshot.paramMap.has('bookId');

    if (this.hasparameter) {
      this.bookId = Number.parseInt(this._avtivatedRoute.snapshot.paramMap.get("bookId"));

      this.bookService.singleBook(this.bookId).subscribe(data => {
        this.book = data;
        console.log(data);
      }, error=> {
        console.log("Error has occured");
      })
    }
    else {
      console.log("do something");
    }

  }



}
