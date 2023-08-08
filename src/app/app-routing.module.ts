import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form3Component } from './form3/form3.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'orderingForm', component: Form3Component },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: '/orderingForm', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
