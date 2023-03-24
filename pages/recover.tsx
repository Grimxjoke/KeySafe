import { useState, Dispatch, SetStateAction } from "react";
import {
  PageWrapper,
  NewWalletAddress,
  LostWalletAddress,
  Success,
  Error,
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
