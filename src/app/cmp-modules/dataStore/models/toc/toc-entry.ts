import { Toc } from './toc';
import {
    Attribute,
    BelongsTo,
    HasOne,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

export class TocEntryType extends JsonApiModel {
    title: string;
    key: string;
    toc: Toc;
    target: any;
}

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
