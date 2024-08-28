import React from 'react'
import {ExtendedOption, CustomInputProps} from '../Select'
import X from '../../assets/icons/ex.svg'

const CustomTagInput: React.FC<CustomInputProps<ExtendedOption>> = ({
  value,
  searchTerm,
  placeholder,
  onInputChange,
  onRemove,
}) => {
  const options = Array.isArray(value) ? value : value ? [value] : []

  return (
    <div className='selected-options'>
      {options.map((option) => (
        <span key={option.value} className='select-label'>
          {option.label}
          <button onClick={() => onRemove(option)}>
            <img src={X} alt='delete' />
          </button>
        </span>
      ))}
      {options.length === 0 && (
        <input
          type='text'
          value={searchTerm}
          onChange={onInputChange}
          placeholder={placeholder}
          className='search-input'
        />
      )}
    </div>
  )
}

export default CustomTagInput
