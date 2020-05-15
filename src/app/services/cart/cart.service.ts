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
export class CartService {
  constructor(private http: HttpClient) {}

  getCartWithItems(uuid: string) {
    return this.http.get<Cart>(environment.API_URL + "shop/cart/" + `${uuid}`);
  }

  // Delete cart_item
  removeCartItem(cartItemID: number) {
    this.http
      .delete(environment.API_URL + "shop/cart/" + `${cartItemID}`)
      .toPromise()
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
