import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { SettleUpComponent } from './components/settle-up/settle-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesListComponent,
    AddExpenseComponent,
    SettleUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
