import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
    constructor(private http: HttpClient) { }
    getExpenses (): Observable<any> {
        return this.http.get( `http://localhost:3000/expenses`);
    }
    postExpense (name: string, expense: number): Observable<any> {
        return this.http.post(`http://localhost:3000/expenses`, {
            name: name,
            expense: expense
        });
    }
    calculateExpenses (): Observable<any> {
        return this.http.post(`http://localhost:3000/calculateExpenses`, {});
    }
}