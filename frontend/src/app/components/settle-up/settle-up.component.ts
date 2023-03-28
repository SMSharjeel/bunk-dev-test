import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-settle-up',
  templateUrl: './settle-up.component.html',
  styleUrls: ['./settle-up.component.scss']
})
export class SettleUpComponent implements OnInit {
  @Input() totalExpenses = 0;
  @Output() settleUp = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }
  dismiss() {
    this.settleUp.emit(null);
  }
}
