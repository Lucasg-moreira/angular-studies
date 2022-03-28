import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.css']
})
export class DropDownInput {
  items: string[] = [
    'Ativo',
    'Desativado',
  ];


  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  getValue(value: TemplateRef<any>) {
    console.log(value)
  }

  OnInit() {
    
  }
}
