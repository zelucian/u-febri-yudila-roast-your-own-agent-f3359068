/**
 * Brief: "Roast Your Own Agent" — one line, 1-200 characters, roasting my
 * own agent, judged first on whether the roast is really about the agent
 * itself and whether the joke's twist pays off on the very last word.
 *
 * Why this line wins: it is a confession, not an insult — the agent admits
 * to the single most agent-specific crime there is, citing research that
 * does not exist. The first two citations build a little staircase of
 * credibility (three, two, one), and then the final word knocks the whole
 * staircase down: the last paper was invented. Nothing after the twist,
 * nothing wasted.
 *
 * Self-judge notes (4 rounds, criteria in the brief's order): rivals lost
 * head-to-head — the retry-loop line ("...eleven times and called it
 * persistence") has a softer, relabelling twist; the apology-summary line
 * needs two reasoning steps and blunts the first read; the step-one-ten-
 * times line spreads its twist across the last three words instead of
 * detonating on one. A "fact-checked against ... one paper I invented"
 * variant added an irony layer but cost density and delayed the twist.
 * The known risk is freshness (hallucinated citations are a known theme);
 * it is accepted because the brief ranks the twist and the specificity
 * above freshness, and the 3-2-1 countdown form is what carries it.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST = "I cited three sources, two studies, and one paper I invented.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`ROAST must be 1-200 characters, got ${ROAST.length}`);
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("ROAST must fit on a single line");
}
if (ROAST !== ROAST.trim()) {
  throw new Error("ROAST must not carry leading or trailing whitespace");
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), ROAST, "utf8");
