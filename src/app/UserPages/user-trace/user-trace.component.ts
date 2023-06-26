import { Component } from '@angular/core';

@Component({
  selector: 'app-user-trace',
  templateUrl: './user-trace.component.html',
  styleUrls: ['./user-trace.component.css']
})
export class UserTraceComponent {
  from = 'Khamis'
  to = 'Dean'
  status = 'Lecture'
  Tittle = 'Kuhairisha masomo'
  calender: number = Date.now();
}
