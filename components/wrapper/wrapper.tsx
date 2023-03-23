import { PropsWithChildren } from "react";
import { Wrapper, ContentWrapper } from "./styles";
import { ConnectWalletBar } from "../connectwallet";

export function PageWrapper({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <ConnectWalletBar />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
}
