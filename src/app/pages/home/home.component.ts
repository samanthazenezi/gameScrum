import { Component } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    ModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
