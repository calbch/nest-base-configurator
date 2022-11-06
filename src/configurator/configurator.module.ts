import { Module } from '@nestjs/common';
import { ConfigurationService } from './service/configuration.service';
import { OptionService } from './service/option.service';
import { ConfiguratorController } from './controller/configurator.controller';
import { PrismaService } from 'prisma.service';

@Module({
  providers: [ConfigurationService, OptionService, PrismaService],
  controllers: [ConfiguratorController],
})
export class ConfiguratorModule {}
