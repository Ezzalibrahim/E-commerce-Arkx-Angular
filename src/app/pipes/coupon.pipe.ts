import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coupon'
})
export class CouponPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
