import { Component, OnInit } from '@angular/core';
import { book } from '../bookInfo';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public search: string;
  public url: string;
  public searchBook: book[];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.width = 0;
  }

public width : number;



  showpage(choice: string) {
    if (choice == "home"){
      this.router.navigate(['/']);
    }
      
    else if (choice == "upload"){
      this.router.navigate(['/uploadbook']);
    }

    else if (choice == "search"){
      //this.sendSearchMessage(this.search);
      
      this.url = "/string/${this.search}" + this.search;
      //this.router.navigate(this.url);
    }

    else 
    {
      alert("                        For any type of problem contact at\n" + 
      "                                    Group3@gmail.com");
      this.router.navigate(['/']);
    }
  }


  SearchKeyWord(searchkeyword){
    console.log("search key is called");
    this.router.navigate(['/search/'+searchkeyword]);
  }


  sendSearchMessage(search){
    this.bookService.searchCommunicate(search);
    console.log("This is from HeaderClass " + search);
  }

  closenav(){
    this.width = 0;
  }

  opennav(){
    this.width = 250;
  }

}
