import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Person,
    PersonCollection,
    PersonCollectionType,
    PersonType
} from './';

@Injectable()
export class PersonModelService extends BaseModelService<Person, PersonType> {
}

@Injectable()
export class PersonCollectionModelService extends BaseModelService<PersonCollection, PersonCollectionType> {
}
