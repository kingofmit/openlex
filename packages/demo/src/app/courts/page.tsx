import { STATE_COURT_SYSTEMS } from "@allem-law/courts";
import CourtsClient from "./CourtsClient";

export const metadata = {
  title: "Court Systems | OpenLex",
  description: "Explore state court hierarchies across all 50 states",
};

export default function CourtsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#e0f2f1] glow-text">Court System Explorer</h1>
        <p className="text-[#5a8a8a] mt-2">
          Explore state court hierarchies — from trial courts to supreme courts, including all the quirks.
        </p>
      </div>
      <div className="gradient-line" />
      <CourtsClient courtSystemsJson={JSON.stringify(STATE_COURT_SYSTEMS)} />
    </div>
  );
}
