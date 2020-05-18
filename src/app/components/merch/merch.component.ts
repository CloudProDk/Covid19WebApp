import { Component, OnInit } from "@angular/core";
import { MerchService } from "../../services/merch/merch.service";
import { Cart } from "../../models/cart";
import { CartItem } from "../../models/cartItem";
import { v4 as uuidv4 } from "uuid";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-merch",
  templateUrl: "./merch.component.html",
  styleUrls: ["./merch.component.scss"],
})
export class MerchComponent implements OnInit {
  products: any = [];
  cart: any = {};
  uuid: string = uuidv4();

  constructor(private merchSvc: MerchService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.getProducts();
    if (!localStorage.getItem("uuid")) {
      this.addCart();
    } else {
      this.getCart();
    }
  }

  getProducts() {
    this.spinner.show();
    this.merchSvc.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
      this.spinner.hide();
    });
  }

  addCart() {
    const cart: Cart = {
      uuid: this.uuid,
    };
    this.cart = cart;
    this.merchSvc.addCart(cart);
    localStorage.setItem("uuid", this.uuid);
    this.getCart();
  }
  getCart() {
    console.log(localStorage.getItem("uuid"));
    this.merchSvc.getCart(localStorage.getItem("uuid")).subscribe((data) => {
      console.log(data);
      console.log(this.cart.length)
      this.cart = data;
    });
  }

  addCartItem(productID: number, item: string) {
    const cartItem: CartItem = {
      cart: this.cart[0].id,
      product: productID,
    };
    console.log(this.cart[0].id);
    this.merchSvc.addCartItem(cartItem, item);
  }
}
