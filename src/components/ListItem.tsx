import styled from 'styled-components';
import { Button } from './ui/Button';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  gap: ${({ theme }) => theme.spacing.md};
`;

const ListItemText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

type ListItemProps = {
  item: string;
  onDelete: () => void;
};

export const ListItem = ({ item, onDelete }: ListItemProps) => {
  return (
    <ListItemContainer>
      <ListItemText>{item}</ListItemText>
      <Button onClick={onDelete}>Delete</Button>
    </ListItemContainer>
  );
};
