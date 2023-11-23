import { NgModule } from "@angular/core";
import { LoadingComponent } from "./loading/loading.component";
import { CommonModule } from "@angular/common";
import { SlideComponent } from "./slide/slide.component";

@NgModule({
  exports: [
    LoadingComponent,
    SlideComponent
  ],
  declarations: [
    LoadingComponent,
    SlideComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class ComponentsModule {}
