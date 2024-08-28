import React, {useState} from 'react'
import Select, {ExtendedOption} from './Select'
import {products} from '../data/mockData'

const BasicSelect: React.FC = () => {
  const [value, setValue] = useState<ExtendedOption | null>(null)
  const [disabled] = useState<ExtendedOption | null>(null)
  const handleChange = (newValue: ExtendedOption | ExtendedOption[] | null) => {
    setValue(newValue as ExtendedOption | null)
  }

  return (
    <>
      <h2>Basic Select</h2>
      <Select
        options={products}
        value={value}
        onChange={handleChange}
        placeholder='Select a product'
        label='Title'
        searchable
        useSearchIcon={false}
      />
      <h3>Disabled</h3>
      <Select
        options={products}
        value={disabled}
        onChange={handleChange}
        placeholder='Select a product'
        label='Title'
        searchable
        disabled
      />
    </>
  )
}

export default BasicSelect
