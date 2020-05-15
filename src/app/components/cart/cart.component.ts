import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart/cart.service";
import { Cart } from "../../models/cart";
import { CartItem } from "../../models/cartItem";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cart: any = [];

  constructor(private cartSvc: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }
  // ABC should be localstorage.uuid
  getCart() {
    this.cartSvc.getCartWithItems("ABC").subscribe((data) => {
      console.log(data);
      this.cart = data;
    });
  }
}
