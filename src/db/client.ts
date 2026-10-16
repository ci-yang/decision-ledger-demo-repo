// Direct database access for reporting jobs (synthetic). Payments code must not import this.
export type Row = Record<string, unknown>;

export const dbClient = {
  async query(sql: string, params: unknown[]): Promise<Row[]> {
    throw new Error(`database not available in the demo (${sql.slice(0, 20)}..., ${params.length} params)`);
  },
};
