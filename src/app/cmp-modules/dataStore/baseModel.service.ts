import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    JsonApiModel,
    ModelType
} from 'angular2-jsonapi';
import { Datastore } from './datastore';

export interface FindOneParams {
    id: string;
    include?: string
}

export interface FindManyParams {
    page?: {
        size: number,
        number: number
    },
    include?: string
}

export interface FindAllParams {
    include?: string
}

@Injectable()
export class BaseModelService<Model extends JsonApiModel, Type> {

    private modelType: ModelType<Model>;

    constructor(private datastore: Datastore) {
    }

    /**
     * returns one entity of collection
     */
    findOne(findOneParams: FindOneParams): Observable<Model> {
        return this.datastore.findRecord(this.modelType, findOneParams.id, findOneParams.include);
    }

    /**
     * returns multiple entities of the collection
     */
    findMany(findManyParams: FindManyParams): Observable<Array<Model>> {
        return this.datastore
            .findAll(this.modelType, findManyParams)
            .map((foundAllEvents) => {
                return foundAllEvents.getModels();
            });
    }

    /**
     * returns all entities of the collection
     */
    findAll(findAllParams: FindAllParams = {}): Observable<Array<Model>> {
        return this.findMany(findAllParams);
    }

    /**
     * Add one entity to the collection
     */
    addOne(entity: Model, persist: boolean = true): Observable<Model> {
        const addOne = this.datastore.createRecord(this.modelType, entity);
        if (persist) {
            // TODO: what happens if the save-call fails?
            return addOne.save();
        } else {
            Observable.of(addOne);
        }
    }

    /**
     * Remove one entity from the collection
     */
    removeOne(id: string, persist: boolean = true): Observable<Response> {
        // TODO: enable persisting? Or does this.datastore.deleteRecord() always persists?
        return this.datastore.deleteRecord(this.modelType, id);
    }

    /**
     * Update one entity in the collection
     */
    updateOne(getOneParams: FindOneParams,
              newAttributes: Partial<Type>, // we use type here because the JsonApiModel breaks the Partial
              persist: boolean = true): Observable<Model> {

        return this.findOne(getOneParams)
            .map((foundOne: Model) => {
                // set new attributes
                Object.assign(foundOne, newAttributes);

                if (persist) {
                    foundOne
                        .save()
                        .catch((error) => {
                            // TODO: put error in datastore too
                            console.error(
                                "updateOne: ",
                                getOneParams,
                                newAttributes,
                                persist,
                                error
                            );
                            // TODO: decide what to do when saving fails
                            // rollback? retry?
                            foundOne.rollbackAttributes();
                            return Observable.of(foundOne);
                        });
                }
                return foundOne;
            });
    }
}

export class BaseModelBulkService<T> {

    /**
     * Add multiple entities to the collection
     */
    // addMany(entities: Array<T>, persist: boolean = true) {
    //     // TODO: enable persisting
    //     let _return = [];
    //     entities.forEach((entity: T) => {
    //         _return.push(this.addOne(entity, persist));
    //     })
    // }

    /**
     * Replace current collection with provided collection
     */
    // addAll(params: any, persist: boolean = true) {
    //     // TODO: enable persisting
    //     // TODO return observable
    //     return this.removeAll().map()
    // }

    /**
     * Remove multiple entities from the collection
     */
    // removeMany(ids: Array<string>, persist: boolean = true) {
    //     // TODO: many
    //     // TODO: enable persisting
    //     return this.datastore.deleteRecord(this.modelType, entity);
    // }

    /**
     * Clear entity collection
     */
    // removeAll(persist: boolean = true) {
    //     // TODO: many
    //     // TODO: enable persisting
    //     // TODO: fix obviously wrong code
    //     const entriesObservable: Observable<JsonApiQueryData<JsonApiModel>> = this.findAll();
    //     return entriesObservable
    //         .map((entries: JsonApiQueryData<JsonApiModel>) => {
    //             entries
    //                 .getModels()
    //                 .forEach(
    //                     (entry: JsonApiModel) => {
    //                         this.removeOne(entry.id, persist);
    //                     }
    //                 )
    //         })
    // }

    /**
     * Update multiple entities in the collection
     */
    // updateMany(ids: Array<string>, updateParams: Array<Partial<T>>, persist: boolean = true) {
    // }
}
