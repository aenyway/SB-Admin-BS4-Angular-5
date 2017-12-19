import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import { Location } from './';
import { Datastore } from '../../datastore';

@Injectable()
export class LocationModelService extends BaseModelService<Location> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = Location;
    }
}
