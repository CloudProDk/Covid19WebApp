import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { TrackerComponent } from "./components/tracker/tracker.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { MerchComponent } from "./components/merch/merch.component";
import { CartComponent } from "./components/cart/cart.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "tracker", pathMatch: "full" },
  { path: "tracker", component: TrackerComponent },
  { path: "quiz", component: QuizComponent },
  { path: "shop", component: MerchComponent },
  { path: "cart", component: CartComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
