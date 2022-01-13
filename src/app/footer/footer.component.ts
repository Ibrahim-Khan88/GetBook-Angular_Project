import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

public openNav(){
  //alert("This is Open Nav");
  document.getElementById("mySidenav").style.width = "250px";
}

 public closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  }



  // $(window).ready(function(){
  //   $(".boton").wrapInner('<div class=botontext></div>');
        
  //       $(".botontext").clone().appendTo( $(".boton") );
        
  //       $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
  //       $(".twist").css("width", "25%").css("width", "+=3px");
  //   });

}
