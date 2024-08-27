import React from 'react'
import { CustomDropdownProps } from './Select/Select'
import { PeopleOption } from './CustomPeopleLabel'
import Checkmark from '../assets/icons/checkmark.svg'
import '../styles/CustomComponents.css'

const MultiSelectDropdown: React.FC<CustomDropdownProps<PeopleOption>> = ({
  options,
  onSelect,
  value,
  searchTerm,
}) => {
  const isSelected = (option: PeopleOption) =>
    Array.isArray(value) && value.some((v) => v.value === option.value)

  return (
    <div className='select-dropdown'>
      {options.map((option) => (
        <div
          key={option.value}
          className={`option ${isSelected(option) ? 'selected' : ''}`}
          onClick={() => onSelect(option)}
        >
          {option.avatar && (
            <img
              src={option.avatar}
              alt={option.label}
              className='option-avatar'
            />
          )}
          <div className='option-content'>
            <div className='option-label'>{option.label}</div>
            {option.subtitle && (
              <div className='option-subtitle'>{option.subtitle}</div>
            )}
          </div>
          {isSelected(option) && <img src={Checkmark} alt='Checkmark' />}
        </div>
      ))}
      {searchTerm && options.length === 0 && (
        <div className='no-results'>No results found</div>
      )}
    </div>
  )
}

export default MultiSelectDropdown
