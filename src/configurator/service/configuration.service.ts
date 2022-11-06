import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma.service';

@Injectable()
export class ConfigurationService {
  constructor(private prisma: PrismaService) {}

  // TODO: Fix this type
  async createConfiguration(options: any) {
    return this.prisma.configuration.create({
      data: {
        options: {
          create: options,
        },
      },
    });
  }

  async getConfigurationById(where: Prisma.ConfigurationWhereUniqueInput) {
    return this.prisma.configuration.findUnique({
      where,
    });
  }

  async deleteConfigurationById(where: Prisma.ConfigurationWhereUniqueInput) {
    return this.prisma.configuration.delete({
      where,
    });
  }
}
