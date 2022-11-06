import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Option } from '@prisma/client';
import { ConfigurationService } from '../service/configuration.service';

@Controller('configurator')
export class ConfiguratorController {
  constructor(private readonly configService: ConfigurationService) {}

  @Post()
  async createConfigurationWithOptions(
    @Body() optionData: { options: Option[] },
  ) {
    const { options } = optionData;
    return this.configService.createConfiguration(options);
  }

  @Get('/:id')
  async getConfigurationById(@Param('id') id: string) {
    return this.configService.getConfigurationById({ id });
  }

  @Delete('/:id')
  async deletePost(@Param('id') id: string) {
    return this.configService.deleteConfigurationById({ id });
  }
}
