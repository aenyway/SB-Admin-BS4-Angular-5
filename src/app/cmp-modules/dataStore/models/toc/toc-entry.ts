import { Toc } from './toc';
import {
    Attribute,
    BelongsTo,
    HasOne,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

@JsonApiModelConfig({
    type: 'toc-entries'
})

export class TocEntry extends JsonApiModel {
    @Attribute()
    title: string;
    @Attribute()
    key: string;

    @BelongsTo()
    toc: Toc;

    @HasOne()
    target: any;
}
