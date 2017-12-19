import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import { Image } from './';
import { Datastore } from '../../datastore';

@Injectable()
export class ImageModelService extends BaseModelService<Image> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = Image;
    }
}
