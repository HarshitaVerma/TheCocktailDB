import { NavigationService } from './../../navigation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public itm;
  itm2;
  //  image;
  constructor(public route: ActivatedRoute, public sanitizer: DomSanitizer, public navServ: NavigationService) {}

  ngOnInit(): void {
    this.itm2 = this.route.snapshot.params;
    this.navServ.getProductById(this.itm2.id).subscribe(res => {
      if (res) {
        this.itm = res['drinks'][0];
      }
    });
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
