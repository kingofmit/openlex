import CitationsClient from "./CitationsClient";

export const metadata = {
  title: "Citation Parser | OpenLex",
  description: "Parse and format legal citations in Bluebook, ALWD, and plain English",
};

export default function CitationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Citation Parser &amp; Formatter</h1>
        <p className="text-gray-400 mt-1">
          Parse any legal citation into structured parts. Format in Bluebook, ALWD, or plain English.
        </p>
      </div>
      <CitationsClient />
    </div>
  );
}
