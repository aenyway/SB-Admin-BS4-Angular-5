import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Location,
    LocationType
} from './';

@Injectable()
export class LocationModelService extends BaseModelService<Location, LocationType> {
}
