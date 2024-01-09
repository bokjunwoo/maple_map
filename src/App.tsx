import AppLayout from './components/UI/Layout/AppLayout';
import ExpSetting from './components/ExpSetting';
import MapTable from './components/MapTable';
import MapSelect from './components/MapSelect';

const App = () => {
  return (
    <AppLayout>
      <ExpSetting />
      <MapSelect />
      <MapTable />
    </AppLayout>
  );
};

export default App;
