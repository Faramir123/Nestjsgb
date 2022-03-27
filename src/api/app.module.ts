import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comments.controller';
import { PostsController } from './controllers/posts.controller';
import { CommentsModule } from './modules/comments/commnets.module';
import { PostsModule } from './modules/posts/posts.module';
@Module({
  imports: [CommentsModule, PostsModule],
  controllers: [PostsController, CommentsController],
  providers: [Array],
})
export class AppModule {}
