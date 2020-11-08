import { Component, OnInit } from '@angular/core';
import { Rapper } from 'src/models/rapper';
import { RapperService } from '../rapper.service';

@Component({
  selector: 'app-rappers',
  templateUrl: './rappers.component.html',
  styleUrls: ['./rappers.component.css']
})
export class RappersComponent implements OnInit {
  rappers: Rapper[];
  
  constructor(private rapperService: RapperService) { }

  ngOnInit(): void {
    this.rapperService.getRappers().subscribe(data => this.rappers = data);
  }

}
