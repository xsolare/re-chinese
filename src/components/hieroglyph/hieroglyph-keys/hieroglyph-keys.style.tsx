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

export const HieroglyphKeysControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 25px 0;

  .item {
    position: relative;

    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border: 2px solid ${({ theme }) => theme.palette.bg.mainContent};
    padding: 5px 10px;
    border-radius: 10px;
    color: ${({ theme }) => theme.palette.color.text};
    min-width: 160px;
    font-size: 0.9rem;
    text-align: center;
    cursor: pointer;

    &.isActive {
      border: 2px solid ${({ theme }) => theme.palette.bg.highlight};
      box-shadow: 0 0 3px ${({ theme }) => theme.palette.bg.highlight};

      .selected {
        opacity: 1;
        transform: scale(1);
        transition: all 0.2s cubic-bezier(0.175, 0.885, 0.3, 1.275);
        fill: ${({ theme }) => theme.palette.bg.highlight};
      }
    }
  }

  .button {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.color.text};
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
