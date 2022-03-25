import { Posts } from './dto/post.dto';
import { Injectable } from '@nestjs/common';

let posts: Posts[] = [
  {
    id: 1,
    name: 'first',
    description: 'first',
    text: 'first',
    createAt: new Date(Date.now()),
    updateAt: new Date(Date.now()),
  },
];

@Injectable()
export class AppService {
  async getPosts(): Promise<Posts[]> {
    return posts;
  }
  async createPost(data: Posts): Promise<Posts[]> {
    posts.push(data);
    return posts;
  }
  async getPost(id: number): Promise<Posts> {
    return posts[id - 1];
  }
  async updatePost(id: number, data: Posts): Promise<Posts[]> {
    let existingPost = posts[id - 1];
    existingPost = {
      ...existingPost,
      ...data,
    };
    posts[id - 1] = existingPost;
    return posts;
  }
  async deletePost(id: number): Promise<Posts[]> {
    let post = posts[id - 1];
    if (post) {
      posts.splice(id - 1, id - 1);
      return posts;
    } else throw new Error('Post not found');
  }
}
