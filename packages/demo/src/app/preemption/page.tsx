import { ALL_PREEMPTION_DOMAINS } from "@openlex/regulations";
import PreemptionClient from "./PreemptionClient";

export const metadata = {
  title: "Preemption Explorer | OpenLex",
  description: "See where federal law preempts state law",
};

export default function PreemptionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Preemption Explorer</h1>
        <p className="text-gray-400 mt-1">
          See where federal law preempts state law — floor, ceiling, field, express, and conflict preemption.
        </p>
      </div>
      <PreemptionClient domainsJson={JSON.stringify(ALL_PREEMPTION_DOMAINS)} />
    </div>
  );
}
