import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import { TocType } from './toc';

@Injectable()
export class TocModelService extends BaseModelService<TocType> {
}
