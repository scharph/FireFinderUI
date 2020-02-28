import { Component, OnInit } from '@angular/core';
import { DistrictClient, DataClient, District, RootObject } from '../api/firefinder-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  constructor(private readonly districtService: DistrictClient, private readonly dataService: DataClient) { }

  districts$: Observable<District[]>;
  current$: Observable<RootObject>;

  displayedColumns: string[] = ['level', 'destination', 'start', 'type', 'units', 'link'];

  ngOnInit() {
    this.districts$ = this.districtService.getDistricts();
    this.current$ = this.dataService.getCurrent();
  }

}
