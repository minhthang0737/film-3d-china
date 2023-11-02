import { NgModule } from "@angular/core";
import { LoadingComponent } from "./loading/loading.component";
import { CommonModule } from "@angular/common";

@NgModule({
  exports: [
    LoadingComponent
  ],
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class ComponentsModule {}
