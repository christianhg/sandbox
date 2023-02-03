import { VoucherState } from './voucher-state';

export const VoucherBanner = ({ state }: { state: VoucherState }) => {
  if (state.name === 'loading') {
    return <p>Loading...</p>;
  }

  if (state.name === 'error') {
    return <p>Oops</p>;
  }

  return <p>Your voucher is {state.voucher.status}</p>;
};
