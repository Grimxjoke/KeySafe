import styled from "styled-components";

export const StepsWrapper = styled.div`
  border-radius: 20px;
  background-color: #fff;
  height: 35vh;
  width: 45vw;
  padding: 2%;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;
export const StepsTitle = styled.h1`
  font-family: roboto;
  font-size: 2rem;
  padding: 0px;
  margin: 0px;
`;
export const StepsSubTitle = styled.h2`
  font-family: roboto;
  font-weight: 300;
  font-size: 1rem;
  padding: 0px;
  margin: 0px;
  margin-top: 10px;
`;
export const InputAddress = styled.input`
  width: 60%;
  border: solid 1px #e4e4e4;
  background-color: #fafafa;
  border-radius: 10px;
  height: 25px;
  margin-top: 10px;
`;
export const NextStepButton = styled.button`
  border-radius: 10px;
  border: solid 2px #02a0fc;
  font-family: roboto;
  color: #02a0fc;
  height: 30px;
  background-color: white;
  width: 60%;
  margin: 10px 0px 0px 0px;
`;
