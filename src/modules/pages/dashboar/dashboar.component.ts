import { Component } from '@angular/core';
import { ApiHttpService } from 'src/service/api_http_service';

@Component({
  selector: 'dashboar',
  templateUrl: './dashboar.component.html',
  styleUrls: ['./dashboar.component.scss'],
  providers: [ApiHttpService]
})
export class DashboarComponent {
  constructor(private apiService: ApiHttpService){
    this.apiService.get("https://ophim1.com/danh-sach/phim-moi-cap-nhat", {page: 1})
    .then(result => {
      console.log(result); // An instance of MyData
    })
    .catch(error => {
      console.error(error);
    });
  }

}
