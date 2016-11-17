import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data: { id: number }) => {
      console.log('LazyComponent', data.id);
    });
  }
}
