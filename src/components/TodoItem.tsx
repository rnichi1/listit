import { ItemContainer } from './ListComponents';

// TODO: Add a text to TodoItem to show if it is completed or not
export const TodoItem = ({ item }: { item: any }) => {
  return (
    <ItemContainer>
      <div>{item.title}</div>
    </ItemContainer>
  );
};
