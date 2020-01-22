/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IBaseItem } from './IBaseItem';
import { IItem } from './IItem';

export interface IItemGroup extends IBaseItem {
    addItem(item : IItem);

    removeItem(item : IItem);

    getAllItems() : Array<IItem>;

    setTitle(title : string);

    getTitle() : string;
}


