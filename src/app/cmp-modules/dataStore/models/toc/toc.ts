import {
    Attribute,
    BelongsTo,
    HasMany,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';
import { TocEntry } from './toc-entry';

@JsonApiModelConfig({
    type: 'tocs'
})

export class Toc extends JsonApiModel {
    @Attribute()
    title: string;

    @Attribute()
    key: string;

    @HasMany({"key": "toc-entries"})
    tocEntries: TocEntry[];

    @BelongsTo()
    event: Event;

    private _hasChildren: boolean = false;
    get hasChildren(): boolean {
        return this.tocEntries != undefined && this.tocEntries.length > 0;
    }
}
