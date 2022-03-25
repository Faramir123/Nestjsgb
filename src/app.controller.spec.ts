import { Posts } from './dto/post.dto';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  const posts: Posts[] = [
    {
      id: 1,
      name: 'first',
      description: 'first',
      text: 'first',
      createAt: new Date(Date.now()),
      updateAt: new Date(Date.now()),
    },
  ];
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return all posts', () => {
      expect(appController.getPosts()).toBe(posts);
    });
  });
});
