import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LivebookController } from './livebook.controller';
import { LivebookService } from './livebook.service';
import { LivebookSchema } from './schemas/livebook.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Livebook', schema: LivebookSchema }])],
    controllers: [LivebookController],
    providers: [LivebookService],
})
export class LivebookModule {}
