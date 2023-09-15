
import React, { useState } from 'react';
import './App.css';
import BottomSheet from './Components/BottomSheet';

function App() {
  const [bottomSheetHeight, setBottomSheetHeight] = useState(null);

  const openHalfBottomSheet = () => {
    setBottomSheetHeight(200); 
  };

  const openFullBottomSheet = () => {
    setBottomSheetHeight(500); 
  };

  const closeBottomSheet = () => {
    setBottomSheetHeight(null);
  };

  return (
    <div className="App">
      <h1>React Bottom Sheet Example</h1>
      <button onClick={openHalfBottomSheet}>Open Half Bottom Sheet</button>
      <button onClick={openFullBottomSheet}>Open Full Bottom Sheet</button>
      {bottomSheetHeight !== null && (
        <BottomSheet height={bottomSheetHeight} onClose={closeBottomSheet} />
      )}
    </div>
  );
}

export default App;
