import styled from "styled-components";

export const WalletTilesWrapper = styled.div`
  display: flex;
  width: 72vw;
  padding: 2%;
  flex-direction: row;
  border-radius: 20px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
`;
export const WalletTileWrapper = styled.div`
  border-radius: 20px;
  box-shadow: 5px 2px 50px 5px rgba(241, 241, 241, 0.25);
  border: solid 1px #e4e4e4;
  background-image: linear-gradient(
    105deg,
    #f9f9ff -17%,
    rgba(236, 255, 255, 0.65) 173%
  );
  width: 20vw;
  height: 30vh;
  padding: 20px;
`;

export const CardName = styled.h1`
  padding: 0px;
  margin: 0px;
  font-size: 40px;
  font-family: roboto;
  cursor: none;
`;
export const CardAddress = styled.h2`
  padding: 0px;
  margin: 0px;
  font-size: 20px;
  font-family: roboto;
  cursor: none;
`;
