import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Toc,
    TocEntry,
    TocEntryType,
    TocType
} from './';

@Injectable()
export class TocModelService extends BaseModelService<Toc> {
}

@Injectable()
export class TocEntryModelService extends BaseModelService<TocEntry> {
}
