import { ConnectedWalletButton } from "./styles";

export function ConnectedWallet() {
  return (
    <ConnectedWalletButton onClick={() => console.log("YO!!")}>
      Connect Wallet
    </ConnectedWalletButton>
  );
}
