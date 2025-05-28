import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../types/product.type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: ProductType[] = [];

  public constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea')
  }
}
