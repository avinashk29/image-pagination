import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LazyLoadingModule } from './lazy-loading/lazy-loading.module';
import { ImagePaginationComponent } from './component/image-pagination/image-pagination.component';
import { HttpClientModule } from "@angular/common/http";
import { ImageService } from './service/image.service';
import { SearchComponent } from './component/search/search.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ImagePaginationComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
