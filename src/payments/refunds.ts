import { ledgerClient } from "../ledger/client";

export async function refundOrder(orderId: string): Promise<number> {
  const cents = await ledgerClient.refundableCents(orderId);
  await ledgerClient.issueRefund({ orderId, amountCents: cents });
  return cents;
}
