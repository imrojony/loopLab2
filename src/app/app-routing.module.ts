import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ShareComponent } from './share/share.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [

  {'path':'home',component:HomeComponent},
  {'path':'explore',component:ExploreComponent},
  {'path':'share',component:ShareComponent},
  {'path':'create',component:CreateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
