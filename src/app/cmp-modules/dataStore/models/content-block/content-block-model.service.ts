import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import { ContentBlock } from './';
import { Datastore } from '../../datastore';

@Injectable()
export class ContentBlockModelService extends BaseModelService<ContentBlock> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = ContentBlock;
    }
}
