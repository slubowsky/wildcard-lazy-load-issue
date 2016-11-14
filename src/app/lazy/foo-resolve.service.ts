import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { FooService } from './foo.service';

@Injectable()
export class FooResolve implements Resolve<boolean> {
    constructor(private fs: FooService, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot): Promise<boolean> | boolean {
        this.fs.doSomething();
        return true;
    }
}