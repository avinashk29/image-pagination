import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }
  access_key = "pkQYoH2IpXxhD-HFiLXcIWQ_FsOHfWv3PoT9E5jxDjM";
  getImages(page: number,  pageLimit: number){
     return this.http.get(`https://api.unsplash.com/photos?page=${page}&per_page=${pageLimit}&client_id=${this.access_key}`)
  }
  onSearchedImage(page: number,  pageLimit: number){
    let keyword = localStorage.getItem('keyword')
    return this.http.get(`https://api.unsplash.com/search/photos?page=${page}&per_page=${pageLimit}&query=${keyword}&client_id=${this.access_key}`)
  }
}
