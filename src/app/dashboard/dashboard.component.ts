import { Component, OnInit } from '@angular/core';
import { Rapper } from 'src/models/rapper';
import { RapperService } from '../rapper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rappers: Rapper[];
  constructor(private rapperService: RapperService) { }

  ngOnInit(): void {
    this.rapperService.getRappers().subscribe(data => this.rappers = data.slice(1, 5));
  }

}
