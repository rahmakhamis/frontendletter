import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.css']
})
export class TraceComponent {
 from = 'Khamis'
 to = 'Dean'
 status = 'Lecture'
 Tittle = 'Kuhairisha masomo'
 calender: number = Date.now();

}
