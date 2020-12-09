import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { TabHeaderDirective } from './directives/tab-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioItemComponent,
    TabHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
