import { Injectable } from '@nestjs/common';
import { Posts } from '../../dto/post.dto';

let posts: Posts[] = [
  {
    id: 1,
    name: 'first',
    description: 'first',
    text: 'first',
    createAt: new Date(Date.now()),
    updateAt: new Date(Date.now()),
    comments: [
      {
        id: 1,
        text: 'comment1',
        createAt: new Date(Date.now()),
      },
      {
        id: 2,
        text: 'comment2',
        createAt: new Date(Date.now()),
      },
    ],
  },
];

@Injectable()
export class PostService {
  async getPosts(): Promise<Posts[]> {
    return posts;
  }

  async getPost(id: number): Promise<Posts | undefined> {
    return posts[id - 1];
  }

  async createPost(data: Posts): Promise<Posts> {
    posts.push(data);
    return data;
  }

  async updatePost(data: Posts): Promise<Posts> {
    let existingPost = posts[data.id];
    existingPost = {
      ...existingPost,
      ...data,
    };
    posts[data.id] = existingPost;
    return posts[data.id];
  }

  async deletePost(id: number): Promise<Posts[]> {
    const post = posts[id];
    if (post) {
      posts.splice(id, id);
      return posts;
    } else throw new Error('Post not found');
  }
}
