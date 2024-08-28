import React from 'react'
import {Option, CustomDropdownProps} from '../Select'
import Checkmark from '../../assets/icons/checkmark.svg'
import '../../styles/CustomComponents.css'

const ActionSheetDropdown: React.FC<CustomDropdownProps<Option>> = ({
  options,
  onSelect,
  value,
}) => {
  return (
    <div className='select-dropdown'>
      {options.map((option) => (
        <div
          key={option.value}
          className='option'
          onClick={() => onSelect(option)}
        >
          {option.image && <span className='option-image'>{option.image}</span>}
          <div className='option-content'>
            <div className='option-label'>{option.label}</div>
            {option.subtitle && (
              <div className='option-subtitle'>{option.subtitle}</div>
            )}
          </div>
          {value === option && <img src={Checkmark} alt='Checkmark' />}
        </div>
      ))}
    </div>
  )
}

export default ActionSheetDropdown
