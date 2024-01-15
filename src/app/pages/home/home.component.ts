import { Component } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { CasaTabuleiroComponent } from '../../components/casa-tabuleiro/casa-tabuleiro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    ModalComponent,
    CasaTabuleiroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
