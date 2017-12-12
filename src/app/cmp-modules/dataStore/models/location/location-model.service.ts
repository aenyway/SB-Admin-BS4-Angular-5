import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import { LocationType } from './location';

@Injectable()
export class LocationModelService extends BaseModelService<LocationType> {
}
