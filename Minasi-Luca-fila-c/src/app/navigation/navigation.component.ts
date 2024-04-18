import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  bottone:boolean=true
  setBottone1(){this.bottone=true,  this.mandaDatiEvento.emit(this.bottone); }

  setBottone2(){this.bottone=false,  this.mandaDatiEvento.emit(this.bottone)}

  @Output() mandaDatiEvento = new EventEmitter<boolean>();


}