export function formatRefund(amount: number, currency = "USD"): string {
  const cents = Math.round(amount * 100);
  return `${(cents / 100).toFixed(2)} ${currency}`;
}
