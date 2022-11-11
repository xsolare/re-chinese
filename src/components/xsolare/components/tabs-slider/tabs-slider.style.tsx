import styled from '@emotion/styled';

type TabsSliderStyledTypes = {
  width?: string;
};
export const TabsSliderStyled = styled.div<TabsSliderStyledTypes>`
  width: ${(props) => (props.width ? props.width : 'auto')};
  margin: 15px 0;
`;

type TabsSliderListStyledTypes = {
  tipHight?: string;
};
export const TabsSliderListStyled = styled.ul<TabsSliderListStyledTypes>`
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  span {
    height: ${(props) => (props.tipHight ? props.tipHight : '2px')};
    background-color: ${({ theme }) => theme.palette?.bg?.highlight};
    user-select: none;
    border-radius: 0 0 3px 3px;
    box-shadow: 0 0 2px ${({ theme }) => theme.palette?.bg?.highlight};

    position: absolute;
    z-index: 15;
    left: 0;
    top: 0;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1);
  }
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1);

  > div {
    top: 0;
    position: absolute;
    background-color: ${({ theme }) => theme?.palette?.divider};
    height: 2px;
    width: 100%;
  }
`;

type TabsSliderItemStyledTypes = {
  isSelected: boolean;
};
export const TabsSliderItemStyled = styled.li<TabsSliderItemStyledTypes>`
  z-index: 5;
  padding: 0 16px;
  padding-top: 4px;
  position: relative;
  z-index: 10;
  min-height: 40px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette?.color?.text};
`;

export const TabsSliderHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  > h1 {
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 1.5rem;
    margin: 0;
    color: ${({ theme }) => theme.palette?.color?.text};
  }
`;
