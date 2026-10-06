import portraitAsset from "@/assets/ridam-portrait.png.asset.json";

export function HeroPortrait() {
  return (
    <div className="relative aspect-[3/4] w-full max-w-[300px]">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/25 to-transparent blur-2xl" />
      <div className="relative h-full w-full overflow-hidden border border-border bg-secondary/40 backdrop-blur-sm">
        <img
          src={portraitAsset.url}
          alt="Portrait of Ridam Kumar"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
