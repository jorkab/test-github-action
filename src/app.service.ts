import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
    // feat: add new feature
    // fix: fix a bug

    // feat: add new feature
    // feat!: add breaking change
  }
}
