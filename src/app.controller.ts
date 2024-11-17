import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('movie')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMoviews() {
    return this.appService.getMovies();
  }

  @Get(':id')
  getMovie() {
    return {
      id: 1,
      name: 'Harry porter',
      character: ['harry', 'mote'],
    };
  }

  @Post()
  postMovie() {
    return {
      id: 3,
      name: '모아나',
      character: ['모아나', '모아나?'],
    };
  }

  @Patch(':id')
  patchMovie() {
    return {
      id: 3,
      name: '모아나2',
      character: ['모아나', '모아나!'],
    };
  }

  @Delete(':id')
  deleteMovie() {
    return 3;
  }
}
