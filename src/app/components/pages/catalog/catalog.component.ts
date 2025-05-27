import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";
import {ProductsService} from "../../../services/products.service";
import {tap} from "rxjs";

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public products: ProductType[] = [];

  constructor(private http: HttpClient, private productsService: ProductsService) {
  }

  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;

    this.productsService.getProducts()
      .pipe(
        tap(()=>{
          this.loading = false;
        })
      )
      .subscribe((data: ProductType[]) => {
        this.products = data;
        console.log(this.products)
      })
  }

}
