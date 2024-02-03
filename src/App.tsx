import AppLayout from './components/UI/Layout/AppLayout';
import ExpSetting from './components/ExpSetting';
import MapSelect from './components/MapSelect';
import { useState } from 'react';

const App = () => {
  const [expIncrease, setExpIncrease] = useState(100);

  return (
    <AppLayout>
      <ExpSetting expIncrease={expIncrease} setExpIncrease={setExpIncrease} />
      <MapSelect />
    </AppLayout>
  );
};

export default App;
