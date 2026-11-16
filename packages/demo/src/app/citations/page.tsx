import CitationsClient from "./CitationsClient";

export const metadata = {
  title: "Citation Parser | OpenLex",
  description: "Parse and format legal citations in Bluebook, ALWD, and plain English",
};

export default function CitationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#e0f2f1] glow-text">Citation Parser &amp; Formatter</h1>
        <p className="text-[#5a8a8a] mt-2">
          Parse any legal citation into structured parts. Format in Bluebook, ALWD, or plain English.
        </p>
      </div>
      <div className="gradient-line" />
      <CitationsClient />
    </div>
  );
}
