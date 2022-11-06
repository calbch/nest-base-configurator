import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma.service';

@Injectable()
export class ConfigurationService {
  constructor(private prisma: PrismaService) {}

  async createConfiguration(data: Prisma.ConfigurationCreateInput) {
    return this.prisma.configuration.create({ data });
  }
}
