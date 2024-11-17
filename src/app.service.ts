import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMovies() {
    return [
      {
        id: 1,
        name: 'Harry porter',
        character: ['harry', 'mote'],
      },
      {
        id: 2,
        name: '반지의 제왕',
        character: ['프로도', '사우론'],
      },
    ];
  }
}
