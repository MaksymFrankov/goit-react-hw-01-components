import styled from '@emotion/styled';
import getRandomHexColor from '../../utils/colorSwitcher';


export const Item = styled.li`
 background-color: ${getRandomHexColor};
 padding: 10px 0px;
 display: table-cell;
 min-width: 64px;
`;