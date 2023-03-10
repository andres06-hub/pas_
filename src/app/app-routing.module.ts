  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'create', loadChildren: ()=> import('./modules/create/create.module').then(m => m.CreateModule)},
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
  {path: 'authors', loadChildren: ()=> import('./modules/authors/authors.module').then(m => m.AuthorsModule)},
  {path: 'not-found', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
