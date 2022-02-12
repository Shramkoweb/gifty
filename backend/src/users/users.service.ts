import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { users } from '../users.mock';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = users;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    console.log(id);
    const user = this.users.find((user) => user.id === parseInt(id, 10));

    if (!user) {
      // TODO Think about remove id from production build error
      throw new NotFoundException(`User not found ${id}`);
    }

    return user;
  }

  create(createUserDto: CreateUserDto): User {
    // TODO[TEMP] - RM after DB connect
    const id = 7777;

    const existedUser = this.users.find(
      (user) => user.email === createUserDto.email,
    );

    if (existedUser) {
      // TODO Remove on prod env
      throw new UnprocessableEntityException('User already exist');
    }

    this.users.push({ ...createUserDto, id });

    return this.findOne(id.toString());
  }

  update(id: string, updateUserDto: UpdateUserDto): void {
    const existingUser = this.findOne(id);

    if (existingUser.userName) {
      this.users.push({
        id: 999,
        age: 28,
        email: 'ololoo.test@gmail.com',
        userName: 'boss',
        firstName: 'Serhii',
        lastName: 'Shramko',
        password: ' 777',
      });
    }
  }

  delete(id: string): User {
    const removeUserIndex = this.users.findIndex(
      (user) => user.id === parseInt(id, 10),
    );

    if (removeUserIndex < 0) {
      // TODO Think about remove id from production build error
      throw new NotFoundException(`User not found ${id}`);
    }

    const [deletedUser] = this.users.splice(removeUserIndex, 1);

    return deletedUser;
  }
}
