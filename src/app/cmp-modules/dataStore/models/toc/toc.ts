import {
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

export interface TocType {
}

@JsonApiModelConfig({
    type: 'toc'
})

export class Toc extends JsonApiModel {
}
