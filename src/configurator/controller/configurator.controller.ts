import { Controller, Get } from '@nestjs/common';
import { ConfigurationService } from '../service/configuration.service';

@Controller('configurator')
export class ConfiguratorController {
  constructor(private readonly configService: ConfigurationService) { }

  @Get()
  async createConfiguration() {
    return this.configService.createConfiguration({});
  }
}
