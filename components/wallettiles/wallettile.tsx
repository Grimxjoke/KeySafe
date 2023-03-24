import Link from "next/link";
import Tilt from "react-parallax-tilt";
import {
  WalletTilesWrapper,
  WalletTileWrapper,
  CardName,
  CardAddress,
  EtherscanButton,
  Title,
  PageWrapper,
} from "./styles";
import { WalletTileProps } from "./types";
import { shortenAddress } from "../../helpers/shortenaddress";

const WalletTilesData = [
  {
    address: "0x5D0f971BCDd15A222A7776d0171225ccfE5EEadE",
    name: "Sam",
  },
  {
    address: "0x5D0f971BCDd15A222A7776d0171225ccfE5EEadE",
    name: "Paul",
  },
  {
    address: "0x5D0f971BCDd15A222A7776d0171225ccfE5EEadE",
    name: "Sarah",
  },
];

export function WalletTiles() {
  return (
    <PageWrapper>
      <Title>Your Recovery Wallets</Title>
      <WalletTilesWrapper>
        {WalletTilesData.map(({ address, name }) => (
          <WalletTile key={address} name={name} address={address} />
        ))}
      </WalletTilesWrapper>
    </PageWrapper>
  );
}

function WalletTile({ address, name }: WalletTileProps) {
  return (
    <Tilt perspective={5000}>
      <WalletTileWrapper>
        <CardName>{name}</CardName>
        <CardAddress>{shortenAddress(address)}</CardAddress>
        <Link href={`https://etherscan.io/address/${address}`}>
          <EtherscanButton>Etherscan</EtherscanButton>
        </Link>
      </WalletTileWrapper>
    </Tilt>
  );
}
