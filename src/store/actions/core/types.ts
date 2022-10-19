import type { BaseAction } from '../../types';
import type { CoreData } from '@types';

export interface StartPageAction extends BaseAction {
  time: number;
  data: CoreData;
}
