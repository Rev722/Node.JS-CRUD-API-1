import { Category } from "../schemas/livebook.schema";


export class CreateLivebookDto{
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}