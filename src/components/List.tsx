import { useCallback, useEffect, useState } from 'react';
import {
  ListContainer,
  ListInput,
  ListTitle,
  ListForm,
  ListButtonContainer,
} from './ListComponents';
import { Button } from './ui/Button';
import { ListItem } from './ListItem';
import styled from 'styled-components';

const ListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

type ListProps = {
  title: string;
};

export const List = ({ title }: ListProps) => {
  const [value, setValue] = useState('');

  const [items, setItems] = useState<string[]>([]);
  const [disableInput, setDisableInput] = useState(false);
  const [saved, setSaved] = useState(false);

  // Add an item to the list
  const onAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === '') return;
    setItems([...items, value]);
    setValue('');
    setSaved(false);
  };

  // Delete an item from the list
  const onDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setSaved(false);
  };

  const onSave = useCallback(() => {
    // save to local storage
    localStorage.setItem('items', JSON.stringify(items));
    setSaved(true);
  }, [items]);

  const onLoad = () => {
    const items = localStorage.getItem('items');
    if (items) setItems(JSON.parse(items));
  };

  // Load items from local storage on mount
  useEffect(() => {
    onLoad();
  }, []);

  // Handle the word "test"
  useEffect(() => {
    if (value.trim().toLowerCase() === 'test') {
      setDisableInput(true);
    } else if (disableInput) {
      setDisableInput(false);
    }
  }, [disableInput, value]);

  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <ListItemsContainer>
        {items.map((item, index) => (
          <ListItem key={item + index} item={item} onDelete={() => onDelete(index)} />
        ))}
      </ListItemsContainer>
      <ListForm onSubmit={onAdd}>
        <ListInput
          placeholder="Add a new item"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <ListButtonContainer>
          <Button onClick={onSave}>Save List {saved ? '✅' : ''}</Button>
          <Button disabled={disableInput} type="submit">
            Add
          </Button>
        </ListButtonContainer>
      </ListForm>
    </ListContainer>
  );
};
