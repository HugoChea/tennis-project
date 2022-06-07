import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TennisPlayerLayoutComponent } from './layout/tennis-player-layout/tennis-player-layout.component';
import { DetailsComponent } from './page/details/details.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: TennisPlayerLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent

      },
      {
        path: 'details/:id',
        component: DetailsComponent

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TennisPlayerRoutingModule { }
