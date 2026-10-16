Synthetic demo repository for Decision Ledger (AI Builder Cup 2026). All content is fictional.

# TrailCart (synthetic)

A tiny fictional TypeScript checkout service used to demonstrate Decision Ledger's pull request deviation checks. The team, product, people and code are invented for the demo.

- `src/payments/` may reach money only through the internal ledger API (`src/ledger/client.ts`), never through the database client directly. This is the team decision the demo pull requests are checked against.
- Pull request "Fixture PR #87" adds partial refunds by reading the database directly (expected: deviation).
- Pull request "Fixture PR #88" changes refund rounding inside the payments module (expected: compliant).
