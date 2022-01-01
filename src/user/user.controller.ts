import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  index() {
    return {
      code: 200,
      data: [
        {
          name: 'xx',
          age: 20,
        },
      ],
    };
  }
}
