import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { TennisPlayerRoutingModule } from './tennis-player-routing.module';
import { TennisPlayerLayoutComponent } from './layout/tennis-player-layout/tennis-player-layout.component';
import { HomeComponent } from './page/home/home.component';
import { DetailsComponent } from './page/details/details.component';


@NgModule({
  declarations: [
    TennisPlayerLayoutComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    TennisPlayerRoutingModule,
    SharedModule
  ]
})
export class TennisPlayerModule { }
