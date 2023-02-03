import { useVoucherState } from './pick-from-union/voucher-state';
import { VoucherBanner } from './pick-from-union/voucher-banner';

function App() {
  const voucherState = useVoucherState();

  return <VoucherBanner state={voucherState} />;
}

export default App;
