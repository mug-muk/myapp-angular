import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';
import { DeleteComponent } from './delete/delete.component';
import {ActivatedRoute,Router, RouterModule} from '@angular/router';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {FormsModule,NgModel,NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    NotfoundComponent,
    EditComponent,
    AboutComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"register",component:RegisterComponent},
    {path:"delete/:No",component:DeleteComponent},
    {path:"edit/:No",component:EditComponent},
    {path:"**",component:NotfoundComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
