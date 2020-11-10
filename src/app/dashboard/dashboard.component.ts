import { Component, OnInit } from '@angular/core';
import { Rapper } from 'src/models/rapper';
import { RapperService } from '../rapper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rappers: Rapper[];
  constructor(private rapperService: RapperService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.rapperService.getRappers().subscribe(data => this.rappers = data.slice(1, 5));
  }
  onSelected(rapper: Rapper) {
    this.router.navigate(['/rappers', rapper._id]);
  }
}
