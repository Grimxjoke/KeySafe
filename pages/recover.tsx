import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { useAccount } from "wagmi";
import {
  PageWrapper,
  NewWalletAddress,
  LostWalletAddress,
  Success,
  Error,
  ConnectWalletMessage,
} from "../components";

type CurrentStepProps = {
  step: steps;
  setCurrentStep: Dispatch<SetStateAction<steps>>;
};
type steps = "lostWalletAddress" | "newWalletAddress" | "error" | "success";

export default function Recover() {
  const [currentStep, setCurrentStep] = useState<steps>("lostWalletAddress");
  return (
    <PageWrapper>
      {" "}
      <CurrentStep setCurrentStep={setCurrentStep} step={currentStep} />
    </PageWrapper>
  );
}

function CurrentStep({ step }: CurrentStepProps) {
  const [walletConnected, setWalletConnected] = useState(false);
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      setWalletConnected(true);
    }
  }, [isConnected]);

  if (!walletConnected) {
    return <ConnectWalletMessage />;
  } else if (step === "newWalletAddress") {
    return <NewWalletAddress />;
  } else if (step === "lostWalletAddress") {
    return <LostWalletAddress />;
  } else if (step === "success") {
    return <Success />;
  } else {
    return <Error />;
  }
}
