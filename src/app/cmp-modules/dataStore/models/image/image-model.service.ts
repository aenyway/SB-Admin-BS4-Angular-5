import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import { ImageType } from './image';

@Injectable()
export class ImageModelService extends BaseModelService<ImageType> {
}
