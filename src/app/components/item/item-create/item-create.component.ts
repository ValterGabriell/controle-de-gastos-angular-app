import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './item-create.component.html',
  styleUrl: './item-create.component.css'
})
export class ItemCreateComponent {

  expense = {
    id: '',
    description: '',
    category: '',
    paymentType: '',
    value: 0
  };

  saveExpense() : void {
    // Lógica para salvar o gasto
    console.log('Expense saved:', this.expense);
  }
}
