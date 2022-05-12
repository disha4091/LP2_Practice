import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <p>
      employee-list works!
      <a href="/departments">Go to departments</a>
    </p>
  `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
