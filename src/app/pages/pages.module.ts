import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BigCardComponent } from '../components/big-card/big-card.component';
import { MenuTitleComponent } from '../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../components/small-card/small-card.component';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { ContentComponent } from './content/content.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [HomeComponent, MenuTitleComponent]
})
export class PagesModule { }
