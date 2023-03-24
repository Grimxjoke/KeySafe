import {
  PageWrapper,
  NewWalletAddress,
  LostWalletAddress,
  Success,
  Error,
} from "../components";
import { useState } from "react";

type CurrentStepProps = {
  step: steps;
};
type steps = "lostWalletAddress" | "newWalletAddress" | "error" | "success";

export default function Recover() {
  const [currentStep, setCurrentStep] = useState<steps>("lostWalletAddress");
  return (
    <PageWrapper>
      {" "}
      <CurrentStep step={currentStep} />
    </PageWrapper>
  );
}

function CurrentStep({ step }: CurrentStepProps) {
  if (step === "newWalletAddress") {
    return <NewWalletAddress />;
  } else if (step === "lostWalletAddress") {
    return <LostWalletAddress />;
  } else if (step === "success") {
    return <Success />;
  } else {
    return <Error />;
  }
}
