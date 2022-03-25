import { Posts } from './dto/post.dto';
import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('news')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-all')
  async getPosts(): Promise<Posts[]> {
    return this.appService.getPosts();
  }
  @Put('create')
  async createPost(@Body() body: Posts): Promise<Posts[]> {
    return this.appService.createPost(body);
  }
  @Get('get-one')
  async getPost(@Query() query: { id: number }): Promise<Posts> {
    return this.appService.getPost(query.id);
  }

  @Post('update')
  async updatePost(
    @Query() query: { id: number },
    @Body() body: Posts,
  ): Promise<Posts[]> {
    return this.appService.updatePost(query.id, body);
  }
  @Delete('delete')
  async deletePost(@Query() query: { id: number }): Promise<Posts[]> {
    return this.appService.deletePost(query.id);
  }
}
