import React, {useState} from 'react'
import Select, {ExtendedOption} from './Select'
import {tags as initialTags} from '../data/mockData'
import ComboboxDropdown from './CustomSelectCombobox/ComboboxDropdown'
import CustomTagInput from './CustomSelectCombobox/CustomTagInput'

const ComboboxSelect: React.FC = () => {
  const [value, setValue] = useState<ExtendedOption[]>([])
  const [disabled] = useState<ExtendedOption[]>([])
  const [tags, setTags] = useState<ExtendedOption[]>(initialTags)

  const handleChange = (newValue: ExtendedOption | ExtendedOption[] | null) => {
    setValue(newValue as ExtendedOption[])
  }

  const handleCreateTag = (inputValue: string) => {
    const newTag: ExtendedOption = {
      id: Date.now(),
      value: inputValue.toLowerCase(),
      label: inputValue,
    }
    setTags((prevTags) => [...prevTags, newTag])
    setValue((prevSelected) => [...prevSelected, newTag])
  }

  return (
    <>
      <h2>Combobox Select</h2>
      <Select
        options={tags}
        value={value}
        onChange={handleChange}
        placeholder='Выберите одну или несколько категорий'
        label='Категория'
        multiple
        creatable
        searchable
        showErrorState={false}
        customDropdown={ComboboxDropdown}
        customInput={CustomTagInput}
        onCreateOption={handleCreateTag}
      />
      <h3>Disabled</h3>
      <Select
        options={tags}
        value={disabled}
        onChange={handleChange}
        placeholder='Выберите одну или несколько категорий'
        multiple
        creatable
        searchable
        onCreateOption={handleCreateTag}
        disabled
      />
    </>
  )
}

export default ComboboxSelect
