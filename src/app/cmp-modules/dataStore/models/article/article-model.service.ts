import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Article,
    ArticleCollection
} from './';
import { Datastore } from '../../datastore';

@Injectable()
export class ArticleModelService extends BaseModelService<Article> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = Article;
    }
}

@Injectable()
export class ArticleCollectionModelService extends BaseModelService<ArticleCollection> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = ArticleCollection;
    }
}
