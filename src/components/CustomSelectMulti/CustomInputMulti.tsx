import React from 'react'
import {Option, CustomLabelProps} from '../Select'
import X from '../../assets/icons/ex.svg'

export interface PeopleOption extends Option {
  firstName: string
  lastName: string
  avatar: string
}

const CustomPeopleLabel: React.FC<CustomLabelProps<PeopleOption>> = ({
  option,
  onRemove,
}) => {
  const shortName = `${option.lastName} ${option.firstName.charAt(0)}.`

  return (
    <div className='select-label'>
      <img src={option.avatar} alt={option.label} className='avatar' />
      <span>{shortName}</span>
      <button onClick={() => onRemove(option)}>
        <img src={X} alt='delete' />
      </button>
    </div>
  )
}

export default CustomPeopleLabel
