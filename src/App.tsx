import React from 'react'
import './App.css'
import BasicSelect from './components/BasicSelect'
import ActionSheetSelect from './components/ActionSheetSelect'
import MultiSelect from './components/MultiSelect'
import ComboboxSelect from './components/ComboboxSelect'

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>Custom Select Components</h1>
      <div className='select-flex-container'>
        <div className='select-column'>
          <BasicSelect />
        </div>
        <div className='select-column'>
          <ActionSheetSelect />
        </div>
        <div className='select-column'>
          <MultiSelect />
        </div>
        <div className='select-column'>
          <ComboboxSelect />
        </div>
      </div>
    </div>
  )
}

export default App
