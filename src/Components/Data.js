import React from "react";
import styled from "styled-components";

const DataWrapper = styled.div`
  position: relative;
`;

const DataText = styled.h1`
  font-size: 4rem;
  font-family: Futura;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Data = () => {
  return (
    <DataWrapper>
      <DataText>21.2k</DataText>
    </DataWrapper>
  );
};

export default Data;