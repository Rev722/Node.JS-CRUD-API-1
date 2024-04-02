import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    GenreX = 'XXX',
    GenreY = 'YYY',
    GenreZ = 'ZZZ',
}

@Schema({
    timestamps: true
})
export class Livebook {


    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const LivebookSchema = SchemaFactory.createForClass(Livebook)