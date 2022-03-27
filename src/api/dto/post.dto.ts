import { Comments } from './comments.dto';
export class Posts {
  id!: number;

  name!: string;

  createAt!: Date;

  updateAt!: Date;

  description!: string;

  text!: string;

  comments!: Comments[];
}
