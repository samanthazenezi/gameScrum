import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-casa-tabuleiro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casa-tabuleiro.component.html',
  styleUrl: './casa-tabuleiro.component.css'
})
export class CasaTabuleiroComponent {

  @Input() casa: string = '';
  @Input() pergunta: string = '';
  @Input() cor: string = '';



}
