import {
  StepsWrapper,
  StepsSubTitle,
  StepsTitle,
  InputAddress,
  NextStepButton,
} from "./styles";

export function LostWalletAddress() {
  return (
    <StepsWrapper>
      <StepsTitle>Wallet Address</StepsTitle>
      <StepsSubTitle>
        Please enter the address of the wallet you would like to recover.
      </StepsSubTitle>
      <form>
        <InputAddress></InputAddress>
        <br />
        <NextStepButton>Submit</NextStepButton>
      </form>
    </StepsWrapper>
  );
}
