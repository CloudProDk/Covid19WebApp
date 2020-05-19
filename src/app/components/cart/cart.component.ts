import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart/cart.service";
import { Cart } from "../../models/cart";
import { CartItem } from "../../models/cartItem";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cart: any = [];
  totalPrice = 0;

  constructor(
    private cartSvc: CartService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.spinner.show();
    this.cartSvc
      .getCartWithItems(localStorage.getItem("uuid"))
      .subscribe((data) => {
        console.log(data);
        this.cart = data;
        this.totalPrice = 0;
        for (let i = 0; i < this.cart.length; i++) {
          this.totalPrice += this.cart[i].total_price;
        }
        this.spinner.hide();
      });
  }

  removeCartItem(cartItemID: number, cartItemProduct: number) {
    this.spinner.show();
    this.cartSvc.removeCartItem(cartItemID, cartItemProduct).then(() => {
      this.ngOnInit();
    });
    console.log(cartItemID, cartItemProduct);
  }

  twoDecimals(value: number){
    return value.toFixed(2);
  }
}
