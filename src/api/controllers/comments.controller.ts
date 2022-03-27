import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CommentService } from '../modules/comments/comments.service';
import { Comments } from '../dto/comments.dto';
import { Posts } from '../dto/post.dto';
import { DecrementId } from '../../utils/decorators/decrement-id';

@Controller('comments')
export class CommentsController {
  constructor(private readonly CommentService: CommentService) {}

  @Get('get-all')
  async getComments(
    @Query() @DecrementId(['postId']) query: { postId: number },
  ): Promise<Comments[]> {
    return this.CommentService.getComments(query.postId);
  }

  @Get('get-one')
  async getComment(
    @Query()
    @DecrementId(['postId', 'commentId'])
    query: {
      postId: number;
      commentId: number;
    },
  ): Promise<Comments | undefined> {
    return this.CommentService.getComment(query.postId, query.commentId);
  }

  @Post('create')
  async createComment(
    @Query()
    @DecrementId(['postId'])
    query: { postId: number },
    @Body() body: Comments,
  ): Promise<Comments> {
    return this.CommentService.createComment(query.postId, body);
  }

  @Delete('delete')
  async deleteComment(
    @Body()
    @DecrementId(['postId', 'commentId'])
    body: {
      postId: number;
      commentId: number;
    },
  ): Promise<Comments[]> {
    return this.CommentService.deleteComment(body.postId, body.commentId);
  }

  @Put('update')
  async updatePost(
    @Query()
    @DecrementId(['postId', 'commentId'])
    query: { postId: number; commentId: number },
    @Body() data: Comments,
  ): Promise<Posts[]> {
    return this.CommentService.updateComment(
      query.postId,
      query.commentId,
      data,
    );
  }
}
