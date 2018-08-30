import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class GalleryService {
    private host: string = "http://pixabay.com/api/?key=9159385-c311630f3b355978a54c5fad2&q=";

  constructor(private http: Http){

  }

  chercher(query: string, size: number, page: number){

   return this.http.get(this.host+"&q="+query+"&per_page="+size+"&page="+page).
          map(resp=>resp.json());

  }

 
}
