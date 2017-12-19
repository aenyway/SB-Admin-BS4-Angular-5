import {
    Attribute,
    HasMany,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';
import { ContentBlock } from '../content-block';

@JsonApiModelConfig({
    type: 'articles'
})

export class Article extends JsonApiModel {
    @Attribute()
    title: string;

    @HasMany({"key": "content-blocks"})
    contentBlocks: ContentBlock[];

    private _hasChildren: boolean = false;
    get hasChildren(): boolean {
        return this.contentBlocks != undefined && this.contentBlocks.length > 0;
    }
}
