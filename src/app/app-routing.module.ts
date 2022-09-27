import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: 'Home',
  component: HomeComponent,
},
{
path: 'About',
component: AboutComponent,
},

{
  path: 'Contact',
  component: ContactComponent,
},
{
  path: 'Gallery',
  component: GalleryComponent,
},
{
  path: 'Blogs',
  component: BlogsComponent,
},
{
path: 'Login',
  component: LoginComponent,
}
,
{
  path: 'Register',
  component: RegisterComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
