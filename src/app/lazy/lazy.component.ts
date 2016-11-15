import { Component, OnInit } from '@angular/core';
import { FooService } from './foo.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent implements OnInit {

  constructor(private fooService: FooService) { }

  ngOnInit() {
    this.fooService.doSomething();
  }

}
