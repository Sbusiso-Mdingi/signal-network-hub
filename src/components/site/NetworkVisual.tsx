/**
 * Abstract concept visual: isolated claim records resolving into an
 * interpretable network. Conceptual — not a product screenshot.
 */
export function NetworkVisual({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 300, y: 60, r: 5, k: "claim" },
    { x: 168, y: 132, r: 4, k: "provider" },
    { x: 432, y: 128, r: 4, k: "member" },
    { x: 96, y: 254, r: 3.5, k: "claim" },
    { x: 236, y: 232, r: 6.5, k: "focus" },
    { x: 386, y: 246, r: 4.5, k: "facility" },
    { x: 512, y: 216, r: 3.5, k: "claim" },
    { x: 176, y: 352, r: 4, k: "member" },
    { x: 322, y: 356, r: 4.5, k: "provider" },
    { x: 462, y: 344, r: 3.5, k: "claim" },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 4],
    [2, 5],
    [4, 3],
    [4, 5],
    [4, 8],
    [5, 6],
    [3, 7],
    [7, 8],
    [8, 9],
    [5, 9],
  ];

  return (
    <svg
      viewBox="0 0 600 420"
      className={className}
      role="img"
      aria-label="Abstract diagram: isolated claim records connecting into an interpretable network of providers, members and facilities."
    >
      <defs>
        <radialGradient id="sq-halo" cx="40%" cy="55%" r="55%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="420" fill="url(#sq-halo)" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={`h${i}`}
          x1="0"
          x2="600"
          y1={i * 84}
          y2={i * 84}
          stroke="var(--color-border)"
          strokeWidth="1"
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={`v${i}`}
          y1="0"
          y2="420"
          x1={i * 84}
          x2={i * 84}
          stroke="var(--color-border)"
          strokeWidth="1"
        />
      ))}
      <g>
        {edges.map(([a, b], i) => {
          const na = nodes[a]!;
          const nb = nodes[b]!;
          const highlight = a === 4 || b === 4;
          return (
            <line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={highlight ? "var(--color-primary)" : "var(--color-border-strong)"}
              strokeWidth={highlight ? 1.4 : 1}
              strokeOpacity={highlight ? 0.75 : 1}
            />
          );
        })}
      </g>
      {nodes.map((n, i) => (
        <g key={i}>
          {n.k === "focus" && (
            <circle
              cx={n.x}
              cy={n.y}
              r={18}
              fill="none"
              stroke="var(--color-primary)"
              strokeOpacity="0.35"
            />
          )}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={
              n.k === "focus"
                ? "var(--color-primary)"
                : n.k === "provider"
                  ? "var(--color-node)"
                  : "var(--color-foreground)"
            }
            fillOpacity={n.k === "focus" ? 1 : 0.72}
          />
        </g>
      ))}
      <text
        x={262}
        y={214}
        fill="var(--color-primary)"
        fontSize="11"
        fontFamily="var(--font-mono)"
        letterSpacing="1.5"
      >
        SIGNAL
      </text>
    </svg>
  );
}
