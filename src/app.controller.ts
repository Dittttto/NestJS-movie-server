import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('movie')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMoviews() {
    return this.appService.getMovies();
  }

  @Get(':id')
  getMovie(@Param('id') id: string) {
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
  patchMovie(@Param('id') id: string) {
    return {
      id: 3,
      name: '모아나2',
      character: ['모아나', '모아나!'],
    };
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return id;
  }
}
