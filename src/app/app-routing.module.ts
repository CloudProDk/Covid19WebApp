import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { TrackerComponent } from "./components/tracker/tracker.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { MerchComponent } from "./components/merch/merch.component";

const routes: Routes = [
  { path: "", redirectTo: "tracker", pathMatch: "full" },
  { path: "tracker", component: TrackerComponent },
  { path: "quiz", component: QuizComponent },
  { path: "shop", component: MerchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
