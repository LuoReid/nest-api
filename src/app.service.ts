import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getLong(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ numbuer: 11000, names: 'ak,ar,afraid' })
      }, 11000)
    })

  }
}
