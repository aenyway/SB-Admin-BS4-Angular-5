import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import { ExternalFeed } from './';
import { Datastore } from '../../datastore';

@Injectable()
export class ExternalFeedModelService extends BaseModelService<ExternalFeed> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = ExternalFeed;
    }
}
