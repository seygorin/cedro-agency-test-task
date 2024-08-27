import React, {useState} from 'react'
import './App.css'
import Select, {Option} from './components/Select/Select'
import {products, actionOptions, people, tags} from './data/mockData'

const App: React.FC = () => {
  const [productValue, setProductValue] = useState<Option | null>(null)
  const [actionValue, setActionValue] = useState<Option | null>(null)
  const [selectedPeople, setSelectedPeople] = useState<Option[]>([])
  const [selectedTags, setSelectedTags] = useState<Option[]>([])

  const handleProductChange = (value: Option | Option[] | null) => {
    if (value && !Array.isArray(value)) {
      setProductValue(value)
    } else {
      setProductValue(null)
    }
  }

  const handleActionChange = (value: Option | Option[] | null) => {
    if (value && !Array.isArray(value)) {
      setActionValue(value)
    } else {
      setActionValue(null)
    }
  }

  const handlePeopleChange = (value: Option | Option[] | null) => {
    if (Array.isArray(value)) {
      setSelectedPeople(value)
    } else {
      setSelectedPeople([])
    }
  }

  const handleTagChange = (value: Option | Option[] | null) => {
    if (Array.isArray(value)) {
      setSelectedTags(value)
    } else {
      setSelectedTags([])
    }
  }

  return (
    <div className='App'>
      <h1>Custom Select Components</h1>
      <div className='select-grid'>
        <div className='select-column'>
          <h2>Default Select (Products)</h2>
          <Select
            options={products}
            value={productValue}
            onChange={handleProductChange}
            placeholder='Select a product'
            searchable
            withPadding
          />
        </div>

        <div className='select-column'>
          <h2>Action Sheet</h2>
          <Select
            options={actionOptions}
            value={actionValue}
            onChange={handleActionChange}
            placeholder='Select an action'
            variant='action-sheet'
            searchable
          />
        </div>

        <div className='select-column'>
          <h2>Multi Select (People)</h2>
          <Select
            options={people}
            value={selectedPeople}
            onChange={handlePeopleChange}
            placeholder='Select people'
            multiple
            searchable
            variant='multi-select'
          />
        </div>

        <div className='select-column'>
          <h2>Combobox with Tags</h2>
          <Select
            options={tags}
            value={selectedTags}
            onChange={handleTagChange}
            placeholder='Enter tags'
            variant='tags'
            multiple
            creatable
            searchable
            tokenSeparators={[',', ' ']}
          />
        </div>
      </div>
    </div>
  )
}

export default App
