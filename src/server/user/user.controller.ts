import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get('')
    findLong(): any {
        setTimeout(() => {
            return { numbuer: 11000, names: 'ak,ar,afraid' }
        }, 11000)
    }
}
