import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  name = "inizio";
  clickBottone(link: string){
    window.open(link);
    
  }

  setBtn(nomeT: string){
    if(nomeT == "pane" ){
      this.name = "pane";
    }
    if(nomeT == "focaccia" ){
      this.name = "focaccia";
    }
    if(nomeT == "taralli" ){
      this.name = "taralli";
    }
    if(nomeT == "casatiello" ){
      this.name = "casatiello";
    }
    if(nomeT == "baguette" ){
      this.name = "baguettte";
    }
    if(nomeT== "pasticcini"){
      this.name = "pasticcini";
    }
    if(nomeT== "krafen"){
      this.name = "krafen";
    }
  
  }
  prodotti=[
    {nome:"pane",costo:"2 euri",categoria:"per accompagnare",quantita:"20",immagine:"https://www.davidezambelli.com/wp-content/uploads/2023/10/pane-fatto-in-casa-1-1300x731.jpg"},
    {nome:"focaccia",costo:"3 euri",categoria:"per panini",quantita:"18",immagine:"https://www.cucchiaio.it/content/cucchiaio/it/ricette/2013/01/ricetta-focaccia/_jcr_content/header-par/image_single.img.jpg/1635157172062.jpg"},
    {nome:"taralli",costo:"3 euri",categoria:"per accompagnare",quantita:"6",immagine:"https://blog.giallozafferano.it/ricettepanedolci/wp-content/uploads/2020/01/taralli-1.jpeg"},
    {nome:"casatiello",costo:"5 euri",categoria:"primo piatto",quantita:"3",immagine:"https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2009/12/ricetta-casatiello-rustico/casatiello-ante.jpg"},
    {nome:"baguette",costo:"1 euri",categoria:"per accompagnare",quantita:"19",immagine:"https://wips.plug.it/cips/buonissimo.org/cms/2022/12/baguette-francese-patrimonio-unesco.jpg"},
    {nome:"pasticcini",costo:"2 euri",categoria:"dopo cena",quantita:"1",immagine:"https://www.aurora1969.it/wp-content/uploads/2020/03/e505f902-3f43-41d4-b006-bcc51645c41c.jpg"},
    {nome:"krafen",costo:"4 euri",categoria:"pre/dopo cena",quantita:"25",immagine:"https://www.lucake.it/wp-content/uploads/2023/02/krapfen.jpg"},
  ]
}