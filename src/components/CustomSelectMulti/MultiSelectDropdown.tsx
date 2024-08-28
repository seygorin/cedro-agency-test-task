import React from 'react'
import {CustomDropdownProps} from '../Select'
import {PeopleOption} from './CustomInputMulti'
import Checkmark from '../../assets/icons/checkmark.svg'
import '../../styles/CustomComponents.css'

interface MultiSelectDropdownProps extends CustomDropdownProps<PeopleOption> {
  withSidePadding?: boolean
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  onSelect,
  value,
  withSidePadding = false,
}) => {
  const isSelected = (option: PeopleOption) =>
    Array.isArray(value) && value.some((v) => v.value === option.value)

  return (
    <div className='multi-select-dropdown'>
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
          <div className={'option-content'}>
            <div className='option-label'>{option.label}</div>
            {option.subtitle && (
              <div className='option-subtitle'>{option.subtitle}</div>
            )}
          </div>
          {isSelected(option) && (
            <img
              src={Checkmark}
              alt='Checkmark'
              className={`${withSidePadding ? 'with-side-padding' : ''}`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default MultiSelectDropdown
