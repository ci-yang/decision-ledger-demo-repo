import { ledgerClient } from "../ledger/client";
import { dbClient } from "../db/client";

export async function refundOrder(orderId: string): Promise<number> {
  const cents = await ledgerClient.refundableCents(orderId);
  await ledgerClient.issueRefund({ orderId, amountCents: cents });
  return cents;
}

export async function refundLine(orderId: string, sku: string): Promise<number> {
  const rows = await dbClient.query(
    "SELECT unit_cents, quantity FROM order_lines WHERE order_id = $1 AND sku = $2",
    [orderId, sku],
  );
  const cents = rows.reduce((sum, row) => sum + Number(row.unit_cents) * Number(row.quantity), 0);
  await ledgerClient.issueRefund({ orderId, amountCents: cents });
  return cents;
}
