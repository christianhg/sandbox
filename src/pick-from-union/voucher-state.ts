export type Voucher = {
  status: 'expired' | 'valid' | 'invalid' | 'redeemed';
};

export type VoucherState =
  | {
      name: 'loading';
    }
  | {
      name: 'error';
      error: string;
      retry: () => void;
    }
  | {
      name: 'ready';
      voucher: Voucher;
    };

export function useVoucherState(): VoucherState {
  /**
   * Code here...
   */

  return {
    name: 'loading',
  };

  /**
   * More code here...
   */
}
