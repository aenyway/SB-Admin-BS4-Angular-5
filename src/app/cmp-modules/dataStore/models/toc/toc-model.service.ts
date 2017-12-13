import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Toc,
    TocType,
    TocEntry,
    TocEntryType,
} from './';

@Injectable()
export class TocModelService extends BaseModelService<Toc, TocType> {
}

@Injectable()
export class TocEntryModelService extends BaseModelService<TocEntry, TocEntryType> {
}
