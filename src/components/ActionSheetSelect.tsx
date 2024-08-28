import React, {useState} from 'react'
import Select, {ExtendedOption} from './Select'
import {actionOptions} from '../data/mockData'
import ActionSheetDropdown from './CustomSelectAction/ActionSheetDropdown'

const ActionSheetSelect: React.FC = () => {
  const [value, setValue] = useState<ExtendedOption | null>(null)
  const [disabled] = useState<ExtendedOption | null>(null)

  const handleChange = (newValue: ExtendedOption | ExtendedOption[] | null) => {
    setValue(newValue as ExtendedOption | null)
  }

  return (
    <>
      <h2>Action Sheet Select</h2>
      <Select
        options={actionOptions}
        value={value}
        onChange={handleChange}
        placeholder='Select an action'
        label='Title'
        customDropdown={ActionSheetDropdown}
        searchable
      />
      <h3>Disabled</h3>
      <Select
        options={actionOptions}
        value={disabled}
        onChange={handleChange}
        placeholder='Select an action'
        label='Title'
        customDropdown={ActionSheetDropdown}
        searchable
        disabled
      />
    </>
  )
}

export default ActionSheetSelect
