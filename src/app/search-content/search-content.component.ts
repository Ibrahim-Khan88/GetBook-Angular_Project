import { Component, OnInit } from '@angular/core';
import { book } from '../bookInfo';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.css']
})
export class SearchContentComponent implements OnInit {

  public message;
  public bookArray: book[];
  public formdata = new FormData();
  public searchValue: string;
  public hasparameter: boolean;

  constructor(private bookServie: BookService, private _avtivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchbook();
  }


  searchbook() {
    this.hasparameter = this._avtivatedRoute.snapshot.paramMap.has('searchkey');

    if (this.hasparameter) {
      this.searchValue = this._avtivatedRoute.snapshot.paramMap.get("searchkey");
      this.bookServie.searchBook(this.searchValue).subscribe(data => {
        this.bookArray = data;
        console.log(data);
      }, error=> {
        console.log("Error has occured");
      })
    }
    else {
      this.searchValue = "NUll";
    }
  }




  firstFunction(name) {

    this.formdata.append('search', JSON.stringify(name));

    console.log("This is from formdata  " + this.formdata.getAll("search"));
    console.log("This is from formdata  bookarray first value id =   " + this.bookArray);
    this.formdata.delete('search');

  }


  detail(object) {
    this.message = "                                           Book Information\n Publish Date: " + object.date + "\n Phone Number: " + object.phone_Number + "\n Gmail: " +
      object.gmail;
    alert(this.message);
  }


}
