import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-provide',
  templateUrl: './provide.component.html',
  styleUrls: ['./provide.component.css']
})
export class ProvideComponent implements OnInit {
  @Output() saveMyInfo: EventEmitter<{}> = new EventEmitter<{name: string}>();
  newname='';

  infoAdded(){
      this.saveMyInfo.emit({name: this.newname});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
