import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RapperService } from '../rapper.service';
import { Rapper } from 'src/models/rapper';

@Component({
  selector: 'app-rapper-detail',
  templateUrl: './rapper-detail.component.html',
  styleUrls: ['./rapper-detail.component.css']
})
export class RapperDetailComponent implements OnInit {
  rapper: Rapper;
  //public rapperId;
  constructor(
    private route: ActivatedRoute,
    private rapperService: RapperService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRapper();
  }

  getRapper(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap);
    //this.rapperId = id;
    this.rapperService.getRapper(id).subscribe(data => this.rapper = data);
  }
  goBack(): void {
    this.location.back();
  }
}
