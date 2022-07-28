import React from 'react';
import './App.css';
import SlotM  from './SlotM';

function App() {
  return (
   <>
   <div className='slot-box'>
     <div className='slot'>
   <h1>&#9917; Slot Maniche Game &#9917;</h1>
       
       <div className='slotmachine'>
       <SlotM x='😍' y='😍' z='😍' />
       <SlotM x='😈' y='😝' z='😈' />
       <SlotM x='😝' y='😈' z='😝' />
       <SlotM x='⏳' y='⏳' z='⏳' />
        </div>

    </div>
   </div>

   </>
  );
}

export default App;
