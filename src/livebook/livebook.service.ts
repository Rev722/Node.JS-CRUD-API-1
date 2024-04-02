import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Livebook } from './schemas/livebook.schema';
import mongoose from 'mongoose';

@Injectable()
export class LivebookService {
    constructor(
        @InjectModel(Livebook.name)
        private livebookModel: mongoose.Model<Livebook>
    ) {}


    async findAll() {
        const livebooks = await this.livebookModel.find();
        return livebooks;
    }


    async create(livebook: Livebook): Promise<Livebook>{
        const res = await this.livebookModel.create(livebook)
        return res
    }

    async findById(id: string): Promise<Livebook>{
        const livebook = await this.livebookModel.findById(id)
        
        if (!livebook) {
            throw new NotFoundException('Book not found.');
        }
        
        return livebook;
    }

    async updateById(id: string, livebook: Livebook): Promise<Livebook>{
        return await this.livebookModel.findByIdAndUpdate(id, livebook, {
            new: true,
            runValidators: true,
        });        
    }

    async deleteById(id: string): Promise<Livebook>{
        return await this.livebookModel.findByIdAndDelete(id);
    }
}