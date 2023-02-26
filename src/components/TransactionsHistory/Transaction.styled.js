import styled from '@emotion/styled';

export const TableTransactions = styled.table`
  overflow: hidden;
  border: 1px solid #d3d3d3;
  background: #fefefe;
  width: 70%;
  margin: 5% auto;
  border-radius: 5px;
  box-shadow: 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 30px rgb(212 20 67 / 10%);
`;

export const TittleTable = styled.th`
  height: 70px;
  border: 1px solid black;
  padding: 15px;
  text-align: left;
  background: #2f4f4f;
  color: white;
  border-radius: 5px;
`;

export const TittleElemTd = styled.td`
  text-align: center;
  border: 1px solid black;
  padding: 15px;
  text-align: left;
  border-radius: 5px;
`;

export const TittleElemType = styled.td`
  text-align: center;
  border: 1px solid black;
  padding: 15px;
  text-align: left;
  border-radius: 5px;
  font-weight: 700;
  font-size: 20px;
  font-family: 'Times New Roman", Times, serif';
`;

export const ItemTrTable = styled.tr`
  :nth-of-type(even) {
    background: #dcdcdc;
  }
`;
