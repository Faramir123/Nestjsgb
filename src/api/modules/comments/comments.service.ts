import { Injectable } from '@nestjs/common';
import { Posts } from 'src/api/dto/post.dto';
import { Comments } from '../../dto/comments.dto';
import { PostService } from './../posts/posts.service';

@Injectable()
export class CommentService {
  constructor(private readonly postService: PostService) {}
  async getComments(postId: number): Promise<Comments[]> {
    const posts = await this.postService.getPosts();
    return posts[postId].comments;
  }

  async getComment(
    postId: number,
    comentId: number,
  ): Promise<Comments | undefined> {
    const posts = await this.postService.getPosts();
    return posts[postId].comments[comentId];
  }

  async createComment(postId: number, data: Comments): Promise<Comments> {
    const posts = await this.postService.getPosts();
    posts[postId].comments.push(data);
    return data;
  }

  async updateComment(
    postId: number,
    commentId: number,
    data: Comments,
  ): Promise<Posts[]> {
    const posts = await this.postService.getPosts();
    let existingComment = posts[postId].comments[commentId];
    if (existingComment) {
      console.log(data);
      existingComment = {
        ...existingComment,
        ...data,
      };
      posts[postId].comments[commentId] = existingComment;
      return posts;
    } else throw new Error('Такого комментария или поста нет');
  }

  async deleteComment(postId: number, comentId: number): Promise<Comments[]> {
    const posts = await this.postService.getPosts();
    let post = posts[postId - 1];
    const comment = posts[postId - 1].comments[comentId - 1];
    if (comment) {
      post.comments.splice(comentId - 1, comentId - 1);
      return posts[postId - 1].comments;
    } else throw new Error('Post not found');
  }
}
