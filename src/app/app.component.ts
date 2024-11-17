import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RdvComponent } from './rdv/rdv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RouterLink } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RdvComponent,NavbarComponent,FirstpageComponent,SigninComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet_web';
}
