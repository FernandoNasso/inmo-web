import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel('Property') private readonly propertyModel: Model<any>,
  ) {}

  async getAllProperties() {
    return this.propertyModel.find().exec();
  }

  async getPropertyById(id: string) {
    return this.propertyModel.findById(id).exec();
  }

  async createProperty(propertyData: any) {
    const createdProperty = new this.propertyModel(propertyData);
    return createdProperty.save();
  }

  async updateProperty(id: string, propertyData: any) {
    return this.propertyModel.findByIdAndUpdate(id, propertyData, {
      new: true,
    });
  }

  async removeProperty(id: string) {
    return this.propertyModel.findByIdAndDelete(id);
  }
}
