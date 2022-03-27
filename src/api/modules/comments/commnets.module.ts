import { Module } from '@nestjs/common';
import { CommentsController } from '../../controllers/comments.controller';
import { PostsModule } from '../posts/posts.module';
import { CommentService } from './comments.service';

@Module({
  imports: [PostsModule],
  controllers: [CommentsController],
  providers: [Array, CommentService],
  exports: [CommentService],
})
export class CommentsModule {}
