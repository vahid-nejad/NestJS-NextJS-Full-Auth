import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.users.create({
      data: createUserDto,
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    return await this.prisma.users.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.users.findUnique({
      where: { email },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async updateHashedRefreshToken(
    userId: number,
    hashedRefreshToken: string | null,
  ) {
    return await this.prisma.users.update({
      where: { id: userId },
      data: {
        hashedRT: hashedRefreshToken,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
