// JavaScript: Decoupled Event Bus & Pub-Sub (Day 12)
// Day 12 - Frontend & Fullstack Engineering (Advanced)

console.log("=== JavaScript: Decoupled Event Bus & Pub-Sub (Day 12) ===");

interface MetricPayload {
  day: number;
  topic: string;
  timestamp: string;
  status: "active" | "completed";
}

class PipelineEngine {
  private history: MetricPayload[] = [];

  constructor(private name: string) {}

  public record(metric: MetricPayload): void {
    this.history.push(metric);
    console.log(`[${this.name}] Recorded: ${metric.topic} (Status: ${metric.status})`);
  }

  public getSummary() {
    return {
      totalEntries: this.history.length,
      latest: this.history[this.history.length - 1]
    };
  }
}

const engine = new PipelineEngine("custom-event-emitter");
engine.record({
  day: 12,
  topic: "JavaScript: Decoupled Event Bus & Pub-Sub (Day 12)",
  timestamp: new Date().toISOString(),
  status: "active"
});

console.log("Telemetry Summary:", engine.getSummary());
