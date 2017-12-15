import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Article,
    ArticleCollection,
    ArticleCollectionType,
    ArticleType
} from './';

@Injectable()
export class ArticleModelService extends BaseModelService<Article> {
}

@Injectable()
export class ArticleCollectionModelService extends BaseModelService<ArticleCollection> {
}
