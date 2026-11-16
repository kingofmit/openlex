import { useState, useRef, useCallback, useEffect, ChangeEvent } from "react";

export interface CitationParseResult {
  type: string;
  formatted: string;
  valid: boolean;
}

export interface CitationInputProps {
  parse: (raw: string) => CitationParseResult;
  placeholder?: string;
  className?: string;
}

export function CitationInput({
  parse,
  placeholder = "Enter a legal citation...",
  className,
}: CitationInputProps) {
  const [raw, setRaw] = useState("");
  const [result, setResult] = useState<CitationParseResult | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedParse = useCallback(
    (value: string) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (!value.trim()) {
        setResult(null);
        return;
      }
      timerRef.current = setTimeout(() => {
        setResult(parse(value));
      }, 200);
    },
    [parse],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRaw(value);
    debouncedParse(value);
  };

  return (
    <div className={className}>
      <input
        type="text"
        value={raw}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label="Citation input"
        style={{ width: "100%", boxSizing: "border-box" }}
      />
      {result && (
        <div
          style={{ marginTop: 4 }}
          role="status"
          aria-live="polite"
        >
          <span
            style={{ color: result.valid ? "green" : "red", marginRight: 8 }}
            aria-label={result.valid ? "Valid citation" : "Invalid citation"}
          >
            {result.valid ? "\u2713" : "\u2717"}
          </span>
          <span>{result.formatted}</span>
          {result.type && (
            <span style={{ marginLeft: 8, opacity: 0.6 }}>({result.type})</span>
          )}
        </div>
      )}
    </div>
  );
}
