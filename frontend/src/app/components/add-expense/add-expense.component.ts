
import { Component, EventEmitter, OnInit, Output,ViewEncapsulation } from '@angular/core';
import { IExpense } from 'src/app/core/interfaces/expenseInterface';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {
  myObject = {
    name: '',
    expense: 0
  } as IExpense;
  @Output() saveExpense = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  submit(): void {
    this.saveExpense.emit(this.myObject);
    this.myObject = {
      name: '',
      expense: 0
    }
  }
  close(): void {
    this.saveExpense.emit(null);
  }
}
