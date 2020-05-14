import { Component, OnInit } from "@angular/core";
import { MerchService } from "../../services/merch/merch.service";
import { Cart } from "../../models/cart";
import { CartItem } from "../../models/cartItem";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-merch",
  templateUrl: "./merch.component.html",
  styleUrls: ["./merch.component.scss"],
})
export class MerchComponent implements OnInit {
  products: any = [];
  cart: any = {};
  cartID: number;
  uuid: string = uuidv4();

  constructor(private merchSvc: MerchService) {}

  ngOnInit(): void {
    this.getProducts();
    // this.addCart();
    this.getCart();
  }

  getProducts() {
    this.merchSvc.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  // if !localstorage.uuid then run this method
  addCart() {
    const cart: Cart = {
      uuid: this.uuid,
    };
    this.cart = cart;
    this.merchSvc.addCart(cart);
  }
  // else
  getCart() {
    //ABC should be localstorage uuid
    this.merchSvc.getCart("ABC").subscribe((data) => {
      console.log(data);
      this.cart = data;
      this.cartID = data[0].id;
      console.log(data[0].id);
    });
  }

  addCartItem(productID: number) {
    const cartItem: CartItem = {
      cart: this.cartID,
      product: productID,
    };
    this.merchSvc.addCartItem(cartItem);
  }
}
