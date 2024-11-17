import { Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RdvComponent } from './rdv/rdv.component';
import { SigninComponent } from './signin/signin.component';


export const routes: Routes = [
    {'path':"", redirectTo:'/signin',pathMatch:'full'},
    {'path': 'firstpage', component: FirstpageComponent},
    {'path':'rdv',component:RdvComponent},
    {'path':'signin',component:SigninComponent}
];
