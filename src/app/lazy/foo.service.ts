import { Injectable } from '@angular/core';

@Injectable()
export class FooService {
    constructor() {
        console.log('FooService constructor called');
    }

    doSomething(): void {
        console.log('FooService doing something...');
    }
}
