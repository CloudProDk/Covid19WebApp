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
  totalPrice: number = 0;

  constructor(private cartSvc: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartSvc
      .getCartWithItems(localStorage.getItem("uuid"))
      .subscribe((data) => {
        console.log(data);
        this.cart = data;
        this.totalPrice = 0;
        for (let i = 0; i < this.cart.length; i++) {
          this.totalPrice += this.cart[i].total_price;
        }
      });
  }

  removeCartItem(cartItemID: number) {
    this.cartSvc.removeCartItem(cartItemID, this);
    // this.getCart();
    console.log(cartItemID);
  }
}
