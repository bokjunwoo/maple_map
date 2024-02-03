import AppLayout from './components/UI/Layout/AppLayout';
import ExpSetting from './components/ExpSetting';
import MapSelect from './components/MapSelect';
import { useState } from 'react';
import LevelSetting from './components/LevelSetting';

const App = () => {
  const [level, setLevel] = useState(260);
  const [expIncrease, setExpIncrease] = useState(100);

  return (
    <AppLayout>
      <LevelSetting level={level} setLevel={setLevel} />
      <ExpSetting expIncrease={expIncrease} setExpIncrease={setExpIncrease} />
      <MapSelect level={level} />
    </AppLayout>
  );
};

export default App;
