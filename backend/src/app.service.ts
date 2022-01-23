import { Injectable } from '@nestjs/common';

export type TestType = {
  id: number;
  title: string;
};

@Injectable()
export class AppService {
  getHello(): TestType[] {
    return [
      {
        id: 1,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Lorem ipsum',
      },
    ];
  }
}
