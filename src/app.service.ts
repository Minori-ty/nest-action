import { Injectable } from '@nestjs/common';
import { mock, Random } from 'mockjs';
const data = mock({
  'list|10': [
    {
      'id|+1': 1,
      name: Random.name(),
    },
  ],
});
@Injectable()
export class AppService {
  getHello() {
    return {
      code: 200,
      data,
    };
  }
}
