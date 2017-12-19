import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Person,
    PersonCollection
} from './';
import { Datastore } from '../../datastore';

@Injectable()
export class PersonModelService extends BaseModelService<Person> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = Person;
    }
}

@Injectable()
export class PersonCollectionModelService extends BaseModelService<PersonCollection> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = PersonCollection;
    }
}
