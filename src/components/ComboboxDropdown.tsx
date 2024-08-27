import React from 'react'
import {Option, CustomDropdownProps} from './Select/Select'
import Plus from '../assets/icons/plus.svg'
import '../styles/CustomComponents.css'

const ComboboxDropdown: React.FC<CustomDropdownProps<Option>> = ({
  options,
  onSelect,
  value,
  searchTerm,
  onCreateOption,
}) => {
  const isSelected = (option: Option) =>
    Array.isArray(value) && value.some((v) => v.value === option.value)

  return (
    <div className='select-dropdown'>
      {options.map((option) => (
        <div
          key={option.value}
          className={`option ${isSelected(option) ? 'selected' : ''}`}
          onClick={() => onSelect(option)}
        >
          {option.label}
          {isSelected(option)}
        </div>
      ))}
      {searchTerm && options.length === 0 && onCreateOption && (
        <div className='option' onClick={() => onCreateOption(searchTerm)}>
          <div className='create-option-icon'>
            <img src={Plus} alt='Plus' />
          </div>
          <div className='create-option-text'>Создать «{searchTerm}»</div>
        </div>
      )}
    </div>
  )
}

export default ComboboxDropdown
