import AppLayout from './components/ui/Layout/AppLayout';
import ExpSetting from './components/ExpSetting';
import MapTable from './components/MapTable';

const App = () => {
  return (
    <AppLayout>
      <ExpSetting />
      <MapTable />
    </AppLayout>
  );
};

export default App;
