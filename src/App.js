import './App.css';
import LeftComponent from './Components/LeftComponent';
import MeasurementSection from './Components/MeasurementSection';
function App() {
  return (
    <div className='w-100'>
    <div className="App d-flex">
     <LeftComponent/>
     <MeasurementSection/>
    </div>
    </div>
  );
}

export default App;
