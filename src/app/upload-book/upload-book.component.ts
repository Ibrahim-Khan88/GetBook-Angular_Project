import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { book_type } from '../Book_type';
import { BookService } from '../book.service';

@Component({
  selector: 'app-upload-book',
  templateUrl: './upload-book.component.html',
  styleUrls: ['./upload-book.component.css']
})
export class UploadBookComponent implements OnInit {


  public usefile : any = File;
  public formdata = new FormData();
  regiform : FormGroup;
  object: book_type = {
  title:"",
  author: "",
  price: "",
  date: "",
  gmail: "",
  phone_Number: ""
 };
 
 constructor (private fb : FormBuilder, private bookservice: BookService){

  this.regiform = fb.group({
    'title' : [null, Validators.required],
    'author' : [null,Validators.required],
    'price' : [null, Validators.required],
    'date' : [null, Validators.required],
    'gmail' : [null, Validators.required],
    'phone_Number' : [null, Validators.required]
  });
}

  ngOnInit(): void {
  }


  onFormSubmit(form: NgForm){
   
    if (this.regiform.valid){
     const user = this.regiform.value;
  
     this.formdata.append('user', JSON.stringify(user));
     this.formdata.append('file', this.usefile);

     console.log("formdata " + this.formdata.getAll("user"));
     console.log("JSOn " + user );
     
     this.bookservice.saveBook(this.formdata).subscribe();
     alert("Book is successfully uploaded");
  
  
    }
    else{
      console.log("not valid");
      alert("Fill the form properly");
    }
   
  }


  onselectfile(event){
    const file = event.target.files[0];
    this.usefile = file;
  }

}
