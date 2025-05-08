import { useState } from 'react';
import { ListContainer, ListTitle, Row } from './ListComponents';
import { Button } from './ui/Button';
import { TodoItem } from './TodoItem';

type ListProps = {
  title: string;
};

// TODOs:
// - Add the dummy data API call in a function and call it to get some todo data from https://jsonplaceholder.typicode.com/
// - Display the data in the list
// - Add a text to TodoItem to show if it is completed or not

export const List = ({ title }: ListProps) => {
  // TODO: Create a type for the todo (hint: check jsonplaceholder website below for the example and type.)
  const [todo, setTodo] = useState([]);

  // TODO Implement the api call with fetch

  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      {todo.map((todo, index) => (
        <TodoItem key={index} item={todo} />
      ))}

      <Row>
        {/* TODO: Implement the button to get the data from the API */}
        <Button type="button">Get Data</Button>
      </Row>
    </ListContainer>
  );
};
