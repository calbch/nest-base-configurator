import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfiguratorModule } from './configurator/configurator.module';

@Module({
  imports: [ConfiguratorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
