import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Toc,
    TocEntry
} from './';
import { Datastore } from '../../datastore';

@Injectable()
export class TocModelService extends BaseModelService<Toc> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = Toc;
    }
}

@Injectable()
export class TocEntryModelService extends BaseModelService<TocEntry> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = TocEntry;
    }
}
