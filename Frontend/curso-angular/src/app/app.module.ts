import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroTutor1Component } from './pages/cadastro-tutor1/cadastro-tutor1.component';
import { CadastroFotoComponent } from './components/cadastro-foto/cadastro-foto.component';

import { ListarCuidadoresComponent } from './pages/listar-cuidadores/listar-cuidadores.component';

import { CardCuidadoresComponent } from './components/card-cuidadores/card-cuidadores.component';
import { BuscarCuidadorComponent } from './pages/buscar-cuidador/buscar-cuidador.component';
import { CadastroCuidador1Component } from './pages/cadastro-cuidador1/cadastro-cuidador1.component';
import { CadastroCuidador2Component } from './pages/cadastro-cuidador2/cadastro-cuidador2.component';
import { CadastroCuidador3Component } from './pages/cadastro-cuidador3/cadastro-cuidador3.component';





@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,
    HomeComponent,
    CadastroTutor1Component,
    CadastroFotoComponent,
    ListarCuidadoresComponent,
    CardCuidadoresComponent,
    BuscarCuidadorComponent,
    CadastroCuidador1Component,
    CadastroCuidador2Component,
    CadastroCuidador3Component,
    

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
