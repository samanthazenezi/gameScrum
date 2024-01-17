import { Component } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { CasaTabuleiroComponent } from '../../components/casa-tabuleiro/casa-tabuleiro.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ModalComponent,
    CasaTabuleiroComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
