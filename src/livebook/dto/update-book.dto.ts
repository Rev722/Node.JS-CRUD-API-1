import { Category } from "../schemas/livebook.schema";


export class UpdateLivebookDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}