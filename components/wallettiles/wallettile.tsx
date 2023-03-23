import Tilt from "react-parallax-tilt";
import Link from "next/link";
import {
  WalletTilesWrapper,
  WalletTileWrapper,
  CardName,
  CardAddress,
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
    <WalletTilesWrapper>
      {WalletTilesData.map(({ address, name }) => (
        <WalletTile key={address} name={name} address={address} />
      ))}
    </WalletTilesWrapper>
  );
}

function WalletTile({ address, name }: WalletTileProps) {
  return (
    <Tilt glareEnable={true} glareColor="#FFECEC">
      <WalletTileWrapper>
        <CardName>{name}</CardName>
        <CardAddress>{shortenAddress(address)}</CardAddress>
        <Link href={`https://etherscan.io/address/${address}`}>
          <button>Etherscan</button>
        </Link>
      </WalletTileWrapper>
    </Tilt>
  );
}
