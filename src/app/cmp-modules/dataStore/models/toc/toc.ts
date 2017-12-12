import {
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'toc'
})

export interface TocType {
}

export class Toc extends JsonApiModel {
}
