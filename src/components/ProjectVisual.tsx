type VisualKind = "agents" | "ledger" | "anomaly";

function AgentsVisual() {
  const nodes = ["voice.in", "router", "memory", "response"];
  return (
    <div className="flex h-full flex-col justify-between gap-6 p-5">
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>friday // agent.pipeline</span>
        <span className="text-primary">illustrative</span>
      </div>
      <div className="flex items-center gap-0">
        {nodes.map((node, i) => (
          <div key={node} className="flex flex-1 items-center last:flex-none">
            <div className="border border-primary/40 bg-background px-2.5 py-2 font-mono text-xs uppercase tracking-wider text-foreground/90">
              {node}
            </div>
            {i < nodes.length - 1 && (
              <div className="h-px flex-1 bg-gradient-to-r from-primary/60 to-primary/20" />
            )}
          </div>
        ))}
      </div>
      <div className="space-y-2 font-mono text-xs text-muted-foreground">
        {[
          ["memory.recall", "38ms"],
          ["router.confidence", "0.94"],
          ["latency.vs.livekit", "-12%"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between gap-3">
            <span className="truncate">{k}</span>
            <span className="text-primary">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LedgerVisual() {
  const rows = [
    ["#4821", "0x8f3e…c21a", "0.42 ETH"],
    ["#4822", "0x17bd…9e04", "1.10 ETH"],
    ["#4823", "0xa4f0…55d7", "0.08 ETH"],
    ["#4824", "0x63c9…7bb2", "0.75 ETH"],
  ];
  return (
    <div className="flex h-full flex-col justify-between gap-4 p-5">
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>giftchain // donation.ledger</span>
        <span className="text-primary">illustrative</span>
      </div>
      <div className="space-y-2">
        {rows.map(([block, hash, amt]) => (
          <div
            key={block}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border border-border/60 bg-background/60 px-3 py-2 font-mono text-xs"
          >
            <span className="text-primary">{block}</span>
            <span className="truncate text-muted-foreground">{hash}</span>
            <span className="text-foreground/90">{amt}</span>
          </div>
        ))}
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        tamper-evident · every donation is an on-chain record
      </p>
    </div>
  );
}

function AnomalyVisual() {
  const bars = [
    ["pos.variance", 82],
    ["msg.frequency", 64],
    ["route.deviation", 47],
    ["speed.delta", 31],
    ["ttl.mismatch", 18],
  ];
  return (
    <div className="flex h-full flex-col justify-between gap-4 p-5">
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>vexis // shap.explain</span>
        <span className="border border-primary/50 px-1.5 py-0.5 text-primary">flagged</span>
      </div>
      <div className="space-y-2.5">
        {bars.map(([label, value]) => (
          <div key={label} className="space-y-1">
            <div className="flex justify-between font-mono text-xs text-muted-foreground">
              <span>{label}</span>
              <span className="text-foreground/80">{(Number(value) / 100).toFixed(2)}</span>
            </div>
            <div className="h-1 bg-secondary">
              <div
                className="h-full bg-primary/80 transition-all duration-700"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        node 0xV7 flagged — feature attribution via TreeSHAP
      </p>
    </div>
  );
}

export function ProjectVisual({ kind }: { kind: VisualKind }) {
  return (
    <div aria-hidden="true" className="relative h-full min-h-[220px] w-full overflow-hidden border border-border bg-secondary/30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--border))_1px,transparent_0)] [background-size:18px_18px]"
      />
      <div aria-hidden className="pointer-events-none absolute -top-10 right-0 size-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative h-full">
        {kind === "agents" && <AgentsVisual />}
        {kind === "ledger" && <LedgerVisual />}
        {kind === "anomaly" && <AnomalyVisual />}
      </div>
    </div>
  );
}
