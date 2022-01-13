import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonContentComponent } from './common-content/common-content.component';
import { UploadBookComponent } from './upload-book/upload-book.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { DetailContentComponent } from './detail-content/detail-content.component';


const routes: Routes = [

  { path: '', component: CommonContentComponent },
  { path: 'uploadbook', component: UploadBookComponent },
  { path: 'search/:searchkey', component: SearchContentComponent },
  { path: 'detail/:bookId', component: DetailContentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
