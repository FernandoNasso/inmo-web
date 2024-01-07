import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PropertiesService } from '../services/properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  getAllProperties() {
    return this.propertiesService.getAllProperties();
  }

  @Get(':id')
  getPropertyById(@Param('id') id: string) {
    return this.propertiesService.getPropertyById(id);
  }

  @Post()
  createProperty(@Body() propertyData: any) {
    return this.propertiesService.createProperty(propertyData);
  }

  @Put(':id')
  updateProperty(@Param('id') id: string, @Body() propertyData: any) {
    return this.propertiesService.updateProperty(id, propertyData);
  }

  @Delete(':id')
  removeProperty(@Param('id') id: string) {
    return this.propertiesService.removeProperty(id);
  }
}
