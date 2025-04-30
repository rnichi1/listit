import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.cta};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: none;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;
