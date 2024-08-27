import React from 'react'
import {ExtendedOption, CustomInputProps} from './Select/Select'

const CustomTagInput: React.FC<CustomInputProps<ExtendedOption>> = ({
  value,
  searchTerm,
  placeholder,
  onInputChange,
  onRemove,
}) => {
  return (
    <div className='custom-tag-input'>
      {Array.isArray(value) &&
        value.map((option) => (
          <span key={option.value} className='tag'>
            {option.label}
            <button onClick={() => onRemove(option)} className='remove-tag'>
              ×
            </button>
          </span>
        ))}
      {(!Array.isArray(value) || value.length === 0) && (
        <input
          type='text'
          value={searchTerm}
          onChange={onInputChange}
          placeholder={placeholder}
          className='tag-input'
        />
      )}
    </div>
  )
}

export default CustomTagInput
