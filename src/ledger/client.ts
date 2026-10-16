// Internal ledger API: the only path payments code may use to read or move money (synthetic).
export interface RefundRequest {
  orderId: string;
  amountCents: number;
}

export const ledgerClient = {
  async refundableCents(orderId: string): Promise<number> {
    throw new Error(`ledger service not available in the demo (order ${orderId})`);
  },
  async issueRefund(request: RefundRequest): Promise<void> {
    throw new Error(`ledger service not available in the demo (order ${request.orderId})`);
  },
};
