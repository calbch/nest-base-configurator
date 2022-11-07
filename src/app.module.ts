import { Module } from '@nestjs/common';
import { ConfiguratorModule } from './configurator/configurator.module';

@Module({
  imports: [ConfiguratorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
