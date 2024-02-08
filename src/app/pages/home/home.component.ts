import { Component, Input } from '@angular/core';
import { CasaTabuleiroComponent } from '../../components/casa-tabuleiro/casa-tabuleiro.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RoletaComponent } from '../../components/roleta/roleta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CasaTabuleiroComponent,
    FooterComponent,
    RoletaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input() nome : string = '';
}
