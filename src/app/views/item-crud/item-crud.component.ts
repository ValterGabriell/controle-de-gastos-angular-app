import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-item-crud',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './item-crud.component.html',
  styleUrl: './item-crud.component.css'
})
export class ItemCrudComponent {

  expenseList = [
    { id: '1', description: 'Despesa 1', category: 'LOVE', paymentType: 'CASH', value: 10.0 },
    { id: '2', description: 'Despesa 2', category: 'FOOD', paymentType: 'CREDIT', value: 20.0 },
    { id: '3', description: 'Despesa 3', category: 'LOVE', paymentType: 'DEBIT', value: 30.0 }
    // ... mais despesas podem ser adicionadas conforme necessário
  ];


  deleteExpense(item: any) {
      console.log("deletando item " + item.description);
      
  }

}
