import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IExpense } from 'src/app/core/interfaces/expenseInterface';
import { ExpensesService } from 'src/app/core/services/expenses.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {
  myData: Array<IExpense> = [];
  myObject = {
    name: '',
    expense: 0
  } as IExpense;
  totalExpenses = 0;
  constructor(private expService: ExpensesService, private modalService: NgbModal) { }
  ngOnInit(): void {
    this.expService.getExpenses().subscribe(d => {
      if (d.success) {
        this.myData = d.content;
      }
    });
  }
  calculateExpenses(content: any) {
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
       }, (reason) => {
        this.totalExpenses = 0;
    });
    this.expService.calculateExpenses().subscribe(d => {
      this.totalExpenses = d.expenses
    });
  }
  addExpense(content: any) {
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
       }, (reason) => {
        console.log('closed')
        this.myObject = {
          name: '',
          expense: 0
        }
    });
  }
  submit() {
    this.expService.postExpense(this.myObject.name, this.myObject.expense).subscribe(d => {
      if (d.success) {
        this.myData = d.content;
      }
    });
  }
}
