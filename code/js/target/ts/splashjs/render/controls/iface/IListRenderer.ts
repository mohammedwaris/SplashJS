/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IItemGroup } from '../../../controls/iface/IItemGroup';
import { IItem } from '../../../controls/iface/IItem';
import { IBaseListRenderer } from './IBaseListRenderer';

export interface IListRenderer extends IBaseListRenderer {
    addAllItems();

    addItemGroup(itemGroup : IItemGroup);

    addItem(item : IItem);
}


