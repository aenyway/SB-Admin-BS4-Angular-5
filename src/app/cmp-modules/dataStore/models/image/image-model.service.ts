import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Image,
    ImageType
} from './';

@Injectable()
export class ImageModelService extends BaseModelService<Image, ImageType> {
}
