import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    ExternalFeed,
    ExternalFeedType
} from './';

@Injectable()
export class ExternalFeedModelService extends BaseModelService<ExternalFeed, ExternalFeedType> {
}
