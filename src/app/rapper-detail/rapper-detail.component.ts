import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RapperService } from '../rapper.service';

@Component({
  selector: 'app-rapper-detail',
  templateUrl: './rapper-detail.component.html',
  styleUrls: ['./rapper-detail.component.css']
})
export class RapperDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private rapperService: RapperService,
    private location: Location
  ) { }

  ngOnInit(): void {

  }

  getRapper(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rapperService.getRapper(id).subscribe()
  }
}
