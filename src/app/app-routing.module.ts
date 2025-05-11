import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { publishFacade } from '@angular/compiler';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './public-components/home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'auth', 
    component: AuthComponent, 
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule) 
  },
  { path: 'user', 
    component: UserComponent, 
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule) 
  },
  { path: 'books', 
    component: BooksComponent, 
    loadChildren: () => import('./books/books.module').then((x) => x.PublicModule) 
  },

  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
