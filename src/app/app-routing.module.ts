import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagePaginationComponent } from './component/image-pagination/image-pagination.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  {path: '' , component: ImagePaginationComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
