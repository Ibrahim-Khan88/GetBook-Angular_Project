import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { book } from './bookInfo';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  allbook_url: string = "http://localhost:8080/book";  
  private searchBook_url = "http://localhost:8080/search/"; 
  private savebook_url = "http://localhost:8080/savebook";
  private singlebook_url = "http://localhost:8080/onebook";
  constructor(private http: HttpClient) { }

   count : number = 0 ;

  allbook(): Observable<book[]>{
    return this.http.get<book[]>(this.allbook_url);
  }

  saveBook(formdata: FormData):Observable<any>{
    return this.http.post(this.savebook_url, formdata);
  }

  searchBook(searchword:string):Observable<book[]>{
    return this.http.get<book[]>(this.searchBook_url+searchword);
  }

  singleBook(bookId:Number):Observable<book>{
    return this.http.get<book>(this.singlebook_url+bookId);
  }





    // sibling part
    public searchobj = new Subject();
    public searchCommunicate(search){
      this.searchobj.next(search);
      console.log("This is from serviceClass " + search);
    }


    // sibling part
    public bookarray : book;
    public detailhobj = new Subject();
    public detailCommunicate(detailhobj : book){

     this.bookarray = detailhobj;
      this.detailhobj.next(this.bookarray);

    }
}
