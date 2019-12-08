import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  @Input() statusFilter: string='';

  @Output() filterChange: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private mealService: MealService
  ) { }

  ngOnInit() {
    this.change(this.statusFilter);
  }

  change(e: any) {
    this.mealService.filterChange(e);
    this.filterChange.emit(e);
  }

}
