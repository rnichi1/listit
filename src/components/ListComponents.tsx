import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: calc(100vh - 40px);
  width: 100%;
  height: 100%;
  max-width: 850px;
  max-height: 650px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.lg};
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

export const ListTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const ListInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    border-color: transparent;
  }
`;

export const ListForm = styled.form`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xs};
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ItemContainer = styled.button`
  display: flex;
  width: 400px;
  gap: ${({ theme }) => theme.spacing.xs};
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: left;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
