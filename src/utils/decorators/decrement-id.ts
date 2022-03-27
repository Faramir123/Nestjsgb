import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export const DecrementId = createParamDecorator(
  (data: string[], ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    data.forEach((elem) => {
      const id = request.query[elem];
      if (id) request.query[elem] = id - 1;
    });

    data.forEach((elem) => {
      const id = request.body.id;
      if (id) request.body.id = id - 1;
    });

    return data;
  },
);
