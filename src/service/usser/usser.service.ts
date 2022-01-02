import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from '../../schema/user.schema';

@Injectable()
export class UsserService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async findAll() {
    const data = await this.catModel.find().exec();

    return data;
  }
}
