import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/add/operator/map"
import {GalleryService} from "../../services/gallery.service";
import {DetailPage} from "../detail/detail";

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  motCle: string= '';
  size: number = 10;
  cuurentPage: number=1;
  images: any={hits:[]};
  totalPage: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private galleryservice: GalleryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch(){
    this.images.hits=[];
    return this.galleryservice.chercher(this.motCle,this.size,this.cuurentPage).subscribe(data=>{
      this.totalPage=data.totalHits / this.size ;

      if(this.totalPage % this.size != 0 ){
        ++this.totalPage;
      }
      data.hits.forEach(f=>{
        this.images.hits.push(f);
      })
    },err=>{
      console.log(err);
    });
  }
  doInfinite(infiniteScroll) {


    if(this.cuurentPage < this.totalPage){
      ++this.cuurentPage;
       this.onSearch();
       infiniteScroll.complete();
    }

  }
  onDatailImage(img){
    this.navCtrl.push(DetailPage,{myImage: img});
  }

}
