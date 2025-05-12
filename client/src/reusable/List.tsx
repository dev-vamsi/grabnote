import { ListProps } from '../types/list';
import { ListItemProps } from '../types/listitem';
import ListItem from './ListItem';

export default function List(props: ListProps) {
    const { items } = props;

    return (
        <ul>
            {items.map((_each: ListItemProps) => {
                return <ListItem {..._each} />;
            })}
        </ul>
    );
}
