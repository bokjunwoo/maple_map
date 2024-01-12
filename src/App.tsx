import AppLayout from './components/UI/Layout/AppLayout';
import ExpSetting from './components/ExpSetting';
import MapSelect from './components/MapSelect';

const App = () => {
  return (
    <AppLayout>
      <ExpSetting />
      <MapSelect />
    </AppLayout>
  );
};

export default App;
