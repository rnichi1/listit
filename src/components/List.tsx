import { useState } from 'react';
import { ListContainer, ListInput, ListTitle } from './ListComponents';
import { Button } from './ui/Button';

type ListProps = {
  title: string;
};

// TODO:
// - Add a new item to the list
// - Remove an item from the list
// - Implement an effect that listens to the input value and prevents adding the word "test" to the list

export const List = ({ title }: ListProps) => {
  const [value, setValue] = useState('');

  // TODO: Implement State Management with react hooks

  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <ListInput
        placeholder="Add a new item"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {/* TODO: Implement List Item components. Hint: use a map function to render a list of items */}
      <Button
        onClick={() => {
          // TODO: Implement add item functionality
        }}
      >
        Add
      </Button>
    </ListContainer>
  );
};
