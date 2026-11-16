import { ALL_PREEMPTION_DOMAINS } from "@allem-law/regulations";
import PreemptionClient from "./PreemptionClient";

export const metadata = {
  title: "Preemption Explorer | OpenLex",
  description: "See where federal law preempts state law",
};

export default function PreemptionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#e0f2f1] glow-text">Preemption Explorer</h1>
        <p className="text-[#5a8a8a] mt-2">
          See where federal law preempts state law — floor, ceiling, field, express, and conflict preemption.
        </p>
      </div>
      <div className="gradient-line" />
      <PreemptionClient domainsJson={JSON.stringify(ALL_PREEMPTION_DOMAINS)} />
    </div>
  );
}
