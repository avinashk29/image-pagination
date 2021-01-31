import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-pagination',
  templateUrl: './image-pagination.component.html',
  styleUrls: ['./image-pagination.component.css']
})
export class ImagePaginationComponent implements OnInit {
  imagesArray: any;
  page: any = 1;
  pageLimit: any = 20;
  keyword: any;
  constructor(private imageService: ImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.keyword = localStorage.getItem('keyword')
    if(this.route.snapshot.queryParams.page){
       this.getImages(this.route.snapshot.queryParams.page , this.route.snapshot.queryParams.limit);
    }else{
      this.getImages(this.page , this.pageLimit);
    }
  }
  onPrevious(){
    if(this.page >1){
      this.page -= 1
      console.log(this.page);
      this.getImages(this.page , this.pageLimit);
      this.router.navigate([''] , { queryParams: {page: this.page, limit: this.pageLimit}});

    }
  }
  onNext(){
    this.page += 1
    console.log(this.page);
    this.getImages(this.page , this.pageLimit);
    this.router.navigate([''] , { queryParams: {page: this.page, limit: this.pageLimit}});
  }
  onReset(){
    this.router.navigate([''] , { queryParams: {page: 1, limit: 20}});
    localStorage.clear();
    this.keyword = "";
    this.getImages(1 , 20);
  }

  getImages(page: any , limit: any){
   if(this.keyword){
    this.imageService.onSearchedImage(page,limit).subscribe((res: any) => {
      this.imagesArray = res.results;
    })
   }else{
    this.imageService.getImages(page,limit).subscribe((res: any) => {
      console.log(res.results);
      this.imagesArray = res;
    })
   }
  }
}
