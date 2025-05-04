import './App.css';
import Settings from './Setting';
import SettingsContext from './SettingsContext';
import Timer from './Timer';
import { use, useState } from 'react';

function App() {

  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
