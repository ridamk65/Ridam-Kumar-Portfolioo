import { useEffect, useRef, useState } from "react";
import portraitAsset from "@/assets/ridam-portrait.png.asset.json";

const STORAGE_KEY = "hero-portrait";

export function HeroPortrait() {
  const [src, setSrc] = useState<string>(portraitAsset.url);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setSrc(saved);
  }, []);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      setSrc(result);
      try {
        localStorage.setItem(STORAGE_KEY, result);
      } catch {
        /* image too large to remember */
      }
    };
    reader.readAsDataURL(file);
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSrc(portraitAsset.url);
  };

  return (
    <div className="relative w-full max-w-[300px] aspect-[3/4] group">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/25 to-transparent blur-2xl" />
      <div className="relative h-full w-full border border-border bg-secondary/40 backdrop-blur-sm overflow-hidden">
        <img
          src={src}
          alt="Portrait of Ridam Kumar, blockchain and AWS architect developer"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex gap-2 p-3 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex-1 font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-2 bg-primary text-primary-foreground"
          >
            Change photo
          </button>
          <button
            type="button"
            onClick={reset}
            className="font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-2 border border-border hover:bg-secondary"
          >
            Reset
          </button>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}
