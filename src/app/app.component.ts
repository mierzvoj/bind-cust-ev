import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bind-cust-ev';
  elements = []; //tablica
//mam obiekt data z polem name i ładuję do tablicy

  onSave(model: {name1: string}) {
    this.elements.push({type: 'test', name: model.name1 });
  }
}


