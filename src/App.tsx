import React, {useState} from 'react'
import './App.css'
import Select, {ExtendedOption} from './components/Select/Select'
import {
  products,
  actionOptions,
  people,
  tags as initialTags,
} from './data/mockData'
import ActionSheetDropdown from './components/ActionSheetDropdown'
import MultiSelectDropdown from './components/MultiSelectDropdown'
import ComboboxDropdown from './components/ComboboxDropdown'
import CustomPeopleLabel, {PeopleOption} from './components/CustomPeopleLabel'
import CustomTagInput from './components/CustomTagInput'

const App: React.FC = () => {
  const [productValue, setProductValue] = useState<ExtendedOption | null>(null)
  const [actionValue, setActionValue] = useState<ExtendedOption | null>(null)
  const [selectedPeople, setSelectedPeople] = useState<PeopleOption[]>([])
  const [selectedTags, setSelectedTags] = useState<ExtendedOption[]>([])
  const [tags, setTags] = useState<ExtendedOption[]>(initialTags)

  const handleProductChange = (
    value: ExtendedOption | ExtendedOption[] | null
  ) => {
    setProductValue(value as ExtendedOption | null)
  }

  const handleActionChange = (
    value: ExtendedOption | ExtendedOption[] | null
  ) => {
    setActionValue(value as ExtendedOption | null)
  }

  const handlePeopleChange = (value: PeopleOption | PeopleOption[] | null) => {
    setSelectedPeople(value as PeopleOption[])
  }

  const handleTagChange = (value: ExtendedOption | ExtendedOption[] | null) => {
    setSelectedTags(value as ExtendedOption[])
  }

  const handleCreateTag = (inputValue: string) => {
    const newTag: ExtendedOption = {
      id: Date.now(),
      value: inputValue.toLowerCase(),
      label: inputValue,
    }
    setTags((prevTags) => [...prevTags, newTag])
    setSelectedTags((prevSelected) => [...prevSelected, newTag])
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
          />
        </div>

        <div className='select-column'>
          <h2>Action Sheet</h2>
          <Select
            options={actionOptions}
            value={actionValue}
            onChange={handleActionChange}
            placeholder='Select an action'
            customDropdown={ActionSheetDropdown}
            searchable
          />
        </div>

        <div className='select-column'>
          <h2>Multi Select (People)</h2>
          <Select<PeopleOption>
            options={people as PeopleOption[]}
            value={selectedPeople}
            onChange={handlePeopleChange}
            placeholder='Select people'
            multiple
            searchable
            customDropdown={MultiSelectDropdown}
            customLabel={CustomPeopleLabel}
          />
        </div>

        <div className='select-column'>
          <h2>Combobox with Tags</h2>
          <Select
            options={tags}
            value={selectedTags}
            onChange={handleTagChange}
            placeholder='Enter tags'
            multiple
            creatable
            searchable
            customDropdown={ComboboxDropdown}
            customInput={CustomTagInput}
            onCreateOption={handleCreateTag}
          />
        </div>
      </div>
    </div>
  )
}

export default App
