import {
    Attribute,
    HasMany,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';
import { Article } from './article';

@JsonApiModelConfig({
    type: 'article-collections'
})

export class ArticleCollection extends JsonApiModel {
    @Attribute()
    title: string;

    @HasMany()
    articles: Article[];

    private _hasChildren: boolean = false;
    get hasChildren(): boolean {
        return this.articles != undefined && this.articles.length > 0;
    }
}
