import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    ContentBlock,
    ContentBlockType
} from './';

@Injectable()
export class ContentBlockModelService extends BaseModelService<ContentBlock> {
}
