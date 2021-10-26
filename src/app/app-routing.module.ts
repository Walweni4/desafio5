import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
    {path: '', redirectTo:'formulario', pathMatch:'full'},
    {path: 'formulario', component:FormularioComponent},
    {path:'footer', component:FooterComponent},
    {path: 'cadastro', component:CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }