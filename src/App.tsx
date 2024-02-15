import AppLayout from './components/UI/Layout/AppLayout';
import ExpSetting from './components/ExpSetting';
import MapSelect from './components/MapSelect';
import LevelSetting from './components/LevelSetting';

const App = () => {
  return (
    <AppLayout>
      <LevelSetting />
      <ExpSetting />
      <MapSelect />
    </AppLayout>
  );
};

export default App;
