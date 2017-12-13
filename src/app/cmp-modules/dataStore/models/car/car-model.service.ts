import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Car,
    CarCollection,
    CarCollectionType,
    CarType,
} from './';

@Injectable()
export class CarModelService extends BaseModelService<Car, CarType> {
}

@Injectable()
export class CarCollectionModelService extends BaseModelService<CarCollection, CarCollectionType> {
}
