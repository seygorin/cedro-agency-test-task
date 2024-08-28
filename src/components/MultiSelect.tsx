import React, {useState} from 'react'
import Select from './Select'
import {people} from '../data/mockData'
import MultiSelectDropdown from './CustomSelectMulti/MultiSelectDropdown'
import CustomPeopleLabel, {
  PeopleOption,
} from './CustomSelectMulti/CustomInputMulti'

const MultiSelect: React.FC = () => {
  const [value, setValue] = useState<PeopleOption[]>([])
  const [disabled] = useState<PeopleOption[]>([])

  const handleChange = (newValue: PeopleOption | PeopleOption[] | null) => {
    setValue(newValue as PeopleOption[])
  }

  return (
    <>
      <h2>Multi Select</h2>
      <Select<PeopleOption>
        options={people as PeopleOption[]}
        value={value}
        onChange={handleChange}
        placeholder='Placeholder'
        label='Title'
        hint='Hint'
        useSearchIcon={true}
        showErrorState={false}
        multiple
        searchable
        customDropdown={(props) => (
          <MultiSelectDropdown {...props} withSidePadding={true} />
        )}
        customLabel={CustomPeopleLabel}
      />
      <h3>Disabled</h3>
      <Select<PeopleOption>
        options={people as PeopleOption[]}
        value={disabled}
        onChange={handleChange}
        placeholder='Placeholder'
        useSearchIcon={true}
        multiple
        searchable
        customDropdown={(props) => (
          <MultiSelectDropdown {...props} withSidePadding={true} />
        )}
        customLabel={CustomPeopleLabel}
        disabled
      />
    </>
  )
}

export default MultiSelect
