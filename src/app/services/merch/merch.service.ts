import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../../models/product";
import { Cart } from "../../models/cart";
import { CartItem } from "../../models/cartItem";

@Injectable({
  providedIn: "root",
})
export class MerchService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product> {
    return this.http.get<Product>(environment.API_URL + "shop");
  }
  getCart(uuid: string) {
    return this.http.get<Cart>(environment.API_URL + "cart/" + `${uuid}`);
  }
  getCartWithItems(uuid: string) {
    return this.http.get<Cart>(environment.API_URL + "shop/cart/" + `${uuid}`);
  }
  addCart(cart: Cart) {
    this.http.post<Cart>(environment.API_URL + "shop/addCart", cart).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addCartItem(cartItem: CartItem) {
    this.http
      .post<CartItem>(environment.API_URL + "shop/addCartItem", cartItem)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
