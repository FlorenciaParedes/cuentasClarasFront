import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { UsuarioFormComponent } from './component/usuario-form/usuario-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './component/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    UsuarioFormComponent,
    MenuComponent,
    UsuarioFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [AuthService], //aca van los servicios que quiero que se vean visibles en toda la aplicacion

  bootstrap: [AppComponent]
})
export class AppModule { }


