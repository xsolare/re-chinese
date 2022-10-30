import { breakpoint } from '#/utils/theme';
import styled from '@emotion/styled';

export const HieroglyphKeysList = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HieroglyphKeysDescription = styled.div`
  font-size: 1rem;
  padding: 5px;
  max-width: 1200px;
  margin: 0 auto;

  ${breakpoint('md')} {
    font-size: 0.9rem;
  }
`;

export const HieroglyphKeysControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 25px 0;

  .item {
    position: relative;

    background-color: var(--color-background-content);
    border: 2px solid var(--color-background-content);
    padding: 5px 10px;
    border-radius: 10px;
    color: var(--color-text);
    min-width: 160px;
    font-size: 0.9rem;
    text-align: center;
    cursor: pointer;

    &.isActive {
      border: 2px solid var(--color-highlight);
      box-shadow: 0 0 3px var(--color-highlight);

      .selected {
        opacity: 1;
        transform: scale(1);
        transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        fill: var(--color-highlight);
      }
    }
  }

  .button {
    cursor: pointer;
    color: var(--color-text);
  }

  .selected {
    position: absolute;
    top: -10px;
    right: -5px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-out;
  }
`;
