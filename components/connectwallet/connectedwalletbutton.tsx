import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useEffect, useState } from "react";
import { ConnectedWalletButton } from "./styles";
import { shortenAddress } from "../../helpers/shortenaddress";

export function ConnectedWallet() {
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const disconnect = useDisconnect({
    onSuccess() {
      setConnectedAddress(null);
    },
  });

  const { address, isConnecting, isConnected } = useAccount();

  useEffect(() => {
    if (typeof address === "string") {
      setConnectedAddress(address);
    }
  }, [address]);
  return (
    <>
      {connectors.map((connector) => {
        return (
          <ConnectedWalletButton
            key="test"
            onClick={() => {
              if (connectedAddress) {
                disconnect.disconnect();
              } else {
                connect({ connector });
              }
            }}
          >
            {connectedAddress ? shortenAddress(connectedAddress) : "Connect"}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              "(connecting)"}
          </ConnectedWalletButton>
        );
      })}
    </>
  );
}
