import { Module } from '@nestjs/common';
import { PostsController } from '../../controllers/posts.controller';
import { PostService } from './posts.service';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [Array, PostService],
  exports: [PostService],
})
export class PostsModule {}
