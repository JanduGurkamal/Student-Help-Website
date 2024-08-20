import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { FeaturesSectionComponent } from "./features-section/features-section.component";
import { HowItWorksSectionComponent } from "./how-it-works-section/how-it-works-section.component";
import { TestimonialsSectionComponent } from "./testimonials-section/testimonials-section.component";
import { AboutUsSectionComponent } from "./about-us-section/about-us-section.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    FeaturesSectionComponent,
    HowItWorksSectionComponent,
    TestimonialsSectionComponent,
    AboutUsSectionComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
