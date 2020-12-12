import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
/**Components */
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [CartComponent, HomeComponent, ProductDetailsComponent, ProductListComponent, FilterComponent, NavigationComponent],
  imports: [CommonModule, BrowserAnimationsModule, AppRoutingModule, MatDialogModule, FlexLayoutModule, CommonModule, MatCardModule, MatIconModule],
  exports: [NavigationComponent]
})
export class NavigationModule {}
