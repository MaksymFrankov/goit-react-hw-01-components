import styled from '@emotion/styled';


export const Status = styled.span`
 background-color: ${props => props.status ? "green" : "red"};
 padding: 5px;
`;