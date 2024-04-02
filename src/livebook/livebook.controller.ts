import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LivebookService } from './livebook.service';
import { Livebook } from './schemas/livebook.schema';
import { CreateLivebookDto } from './dto/create-livebook.dto';
import { UpdateLivebookDto } from './dto/update-book.dto';

@Controller('livebooks')
export class LivebookController {
    livebookModel: any;
    constructor(private livebookService: LivebookService) {}

    @Get()
    async getAllLivebooks(): Promise<Livebook[]> {
        return this.livebookService.findAll()
    }


    async create(livebook: Livebook): Promise<Livebook> {
        const res = await this.livebookModel.create(livebook)
        return res
    }

    @Post()
    async createLivebook(
        @Body()
        livebook: CreateLivebookDto
    ): Promise<Livebook> {
        return this.livebookService.create(livebook);
    }

    @Get(':id')
    async getLivebook(
        @Param('id')
        id: string,
    ): Promise<Livebook> {
        return this.livebookService.findById(id);
    }
    
    @Put(':id')
    async updateLivebook(
        @Param('id')
        id: string,
        @Body()
        livebook: UpdateLivebookDto,
    ): Promise<Livebook> {
        return this.livebookService.updateById(id, livebook)
    }

    @Delete(':id')
    async deleteLivebook(
        @Param('id')
        id: string,
    ): Promise<Livebook> {
        return this.livebookService.deleteById(id);
    }
}
