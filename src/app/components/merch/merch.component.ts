import { Component, OnInit } from "@angular/core";
import { MerchService } from "../../services/merch/merch.service";
import { Cart } from "../../models/cart";
import { CartItem } from "../../models/cartItem";
import { v4 as uuidv4 } from "uuid";
import { NgxSpinnerService } from "ngx-spinner";
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: "app-merch",
  templateUrl: "./merch.component.html",
  styleUrls: ["./merch.component.scss"],
})
export class MerchComponent implements OnInit {
  products: any = [];
  savedProducts: any = [];
  cart: any = {};
  uuid: string = uuidv4();
  cartItems: any = [];
  numberOfCartItems: number = 0;

  constructor(
    private merchSvc: MerchService,
    private spinner: NgxSpinnerService,
    private cartSvc: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    if (!localStorage.getItem("uuid")) {
      this.addCart();
    } else {
      this.getCart();
    }
    this.getNumberOfItemsInCart();
  }

  getProducts() {
    this.spinner.show();
    this.merchSvc.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
      this.savedProducts = data;
      this.spinner.hide();
      this.getCart();
    });
  }

  search(searchResult: string) {
    console.log(searchResult);
    this.products = this.savedProducts.filter((product) =>
      product.name.toLowerCase().includes(searchResult.toLowerCase())
    );
  }

  getNumberOfItemsInCart() {
    this.numberOfCartItems = 0;
    this.cartSvc.getCartWithItems(localStorage.getItem('uuid')).subscribe(data => {
      this.cartItems = data;
      console.log(this.cartItems)
      this.cartItems.forEach(item => {
        this.numberOfCartItems = this.numberOfCartItems + item.number_of_items;
        console.log('cart count: ' + this.numberOfCartItems)
      });
    });
  }

  addCart() {
    const cart: Cart = {
      uuid: this.uuid,
    };
    this.cart = cart;
    this.merchSvc.addCart(cart);
    localStorage.setItem("uuid", this.uuid);
  }
  getCart() {
    console.log(localStorage.getItem("uuid"));
    this.merchSvc.getCart(localStorage.getItem("uuid")).subscribe((data) => {
      console.log(data);
      console.log(this.cart.length);
      this.cart = data;
    });
  }

  addCartItem(productID: number, item: string) {
    const cartItem: CartItem = {
      cart: this.cart[0].id,
      product: productID,
    };
    console.log(this.cart[0].id);
    this.merchSvc.addCartItem(cartItem, item).then(() => {
      this.ngOnInit();
    });
  }
}
