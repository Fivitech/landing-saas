"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { dialCodes, type DialCode } from "@/data/dialCodes";

/**
 * Phone input with a searchable flag + international dial-code selector.
 * Shared by the full contact form and the home quick form. The default dial
 * code is chosen by the caller (e.g. from geo detection in lib/geo.ts).
 */
export function PhoneField({
  dialCode,
  onDialCodeChange,
  number,
  onNumberChange,
  invalid,
  id = "mobile",
  className,
  placeholder,
}: {
  dialCode: DialCode;
  onDialCodeChange: (value: DialCode) => void;
  number: string;
  onNumberChange: (value: string) => void;
  invalid?: boolean;
  id?: string;
  /** Extra classes for the outer wrapper (e.g. "h-12 rounded-xl"). */
  className?: string;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return dialCodes;
    return dialCodes.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dialCode.includes(q) || c.iso.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div
      className={cn(
        "flex h-10 w-full overflow-hidden rounded-md border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        invalid && "border-destructive",
        className,
      )}
    >
      <Popover open={open} onOpenChange={(next) => { setOpen(next); if (!next) setQuery(""); }}>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label={`Country code: ${dialCode.name} ${dialCode.dialCode}`}
            className="flex shrink-0 items-center gap-1.5 border-r border-input bg-muted/40 px-3 text-sm font-medium transition hover:bg-muted/70 focus-visible:outline-none"
          >
            <span className="text-base leading-none">{dialCode.flag}</span>
            <span className="tabular-nums">{dialCode.dialCode}</span>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-72 p-0">
          <div className="flex items-center gap-2 border-b border-border px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search country or code"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="max-h-64 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <p className="px-3 py-4 text-center text-sm text-muted-foreground">No matches</p>
            ) : (
              filtered.map((c) => (
                <button
                  key={c.iso}
                  type="button"
                  onClick={() => {
                    onDialCodeChange(c);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition hover:bg-muted",
                    c.iso === dialCode.iso && "bg-muted/60",
                  )}
                >
                  <span className="text-base leading-none">{c.flag}</span>
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="tabular-nums text-muted-foreground">{c.dialCode}</span>
                </button>
              ))
            )}
          </div>
        </PopoverContent>
      </Popover>
      <input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        placeholder={placeholder}
        value={number}
        onChange={(event) => onNumberChange(event.target.value)}
        className="h-full w-full bg-transparent px-3 text-base outline-none placeholder:text-muted-foreground md:text-sm"
      />
    </div>
  );
}
