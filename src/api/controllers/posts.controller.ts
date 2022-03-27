import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PostService } from '../modules/posts/posts.service';
import { Posts } from '../dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly appService: PostService) {}

  @Get('get-all')
  async getPosts(): Promise<Posts[]> {
    return this.appService.getPosts();
  }

  @Get('get-one')
  async getPost(@Query() query: { id: number }): Promise<Posts | undefined> {
    return this.appService.getPost(query.id);
  }

  @Get('/:id/detail')
  async getPostOther(@Param('id') id: number): Promise<Posts | undefined> {
    return this.appService.getPost(id);
  }

  @Post('create')
  async createPost(@Body() data: Posts): Promise<Posts> {
    return this.appService.createPost(data);
  }

  @Delete('delete')
  async deletePost(@Body() body: { id: number }): Promise<Posts[]> {
    return this.appService.deletePost(body.id);
  }

  @Put('update')
  async updatePost(@Body() data: Posts): Promise<Posts> {
    return this.appService.updatePost(data);
  }
}
