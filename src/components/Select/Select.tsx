import React, {useState, useRef, useEffect} from 'react'
import './Select.css'
import checkmarkIcon from '../../assets/icons/checkmark.svg'

export type Option = {
  id: string | number
  label: string
  value: string | number
  subtitle?: string
  image?: string
  emoji?: string
  desc?: string
  avatar?: string
  firstName?: string
  lastName?: string
}

type SelectProps = {
  options: Option[]
  value: Option | Option[] | null
  onChange: (value: Option | Option[] | null) => void
  multiple?: boolean
  searchable?: boolean
  creatable?: boolean
  placeholder?: string
  onCreateOption?: (inputValue: string) => void
  status?: 'error'
  optionRender?: (option: Option) => React.ReactNode
  withPadding?: boolean
  variant?: 'default' | 'action-sheet' | 'combobox' | 'multi-select' | 'tags'
  tokenSeparators?: string[]
  customDropdown?: React.ComponentType<CustomDropdownProps>
  customLabel?: React.ComponentType<CustomLabelProps>
}

type CustomDropdownProps = {
  options: Option[]
  value: Option | Option[] | null
  onSelect: (option: Option) => void
  searchTerm: string
  multiple: boolean
  variant: SelectProps['variant']
}

type CustomLabelProps = {
  option: Option
  onRemove: (option: Option) => void
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  multiple = false,
  creatable = false,
  placeholder = 'Select...',
  onCreateOption,
  status,
  optionRender,
  withPadding = false,
  variant = 'default',
  tokenSeparators = [','],
  customDropdown: CustomDropdown,
  customLabel: CustomLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [internalError, setInternalError] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleToggle = () => setIsOpen(!isOpen)

  const handleSelect = (option: Option) => {
    if (multiple || variant === 'tags') {
      const newValue = Array.isArray(value) ? [...value] : []
      const index = newValue.findIndex((v) => v.id === option.id)
      if (index !== -1) {
        newValue.splice(index, 1)
      } else {
        newValue.push(option)
      }
      onChange(newValue)
    } else {
      onChange(option)
      setIsOpen(false)
    }
    setSearchTerm('')
    setInternalError(false)
  }

  const handleRemove = (optionToRemove: Option) => {
    if ((multiple || variant === 'tags') && Array.isArray(value)) {
      const newValue = value.filter((v) => v.id !== optionToRemove.id)
      onChange(newValue)
    } else {
      onChange(null)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setSearchTerm(inputValue)
    setIsOpen(true)

    if (variant === 'tags') {
      const lastChar = inputValue[inputValue.length - 1]
      if (tokenSeparators.includes(lastChar)) {
        const newTag = inputValue.slice(0, -1).trim()
        if (newTag) {
          handleCreateTag(newTag)
        }
      }
    }
    const hasMatches = options.some((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    )
    setInternalError(!hasMatches && inputValue !== '')
  }

  const handleCreateTag = (tag: string) => {
    const newOption: Option = {
      id: Date.now(),
      label: tag,
      value: tag.toLowerCase(),
    }
    handleSelect(newOption)
    if (onCreateOption) {
      onCreateOption(tag)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchTerm) {
      e.preventDefault()
      if (variant === 'tags' || creatable) {
        handleCreateTag(searchTerm)
      } else if (filteredOptions.length > 0) {
        handleSelect(filteredOptions[0])
      }
    }
  }

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getSelectClasses = () => {
    let classes = 'select-container'
    if (withPadding) classes += ' with-padding'
    if (status === 'error' || internalError) classes += ' error'
    if (variant === 'tags') classes += ' tags'
    return classes
  }

  const renderOption = (option: Option) => {
    if (optionRender) {
      return optionRender(option)
    }

    const isSelected = Array.isArray(value)
      ? value.some((v) => v.id === option.id)
      : value && (value as Option).id === option.id

    switch (variant) {
      case 'action-sheet':
        return (
          <div className='action-sheet-option'>
            <div className='option-image'>{option.image}</div>
            <div className='option-content'>
              <div className='option-label'>{option.label}</div>
              {option.subtitle && (
                <div className='option-subtitle'>{option.subtitle}</div>
              )}
            </div>
            {isSelected && (
              <span className='option-checkmark'>
                <img
                  src={checkmarkIcon}
                  alt='Selected'
                  width='22'
                  height='22'
                />
              </span>
            )}
          </div>
        )
      case 'multi-select':
        return (
          <div className='multi-select-option'>
            {option.avatar && (
              <img
                src={option.avatar}
                alt={option.label}
                className='option-avatar'
              />
            )}
            <div className='option-content'>
              <div className='option-title'>{option.label}</div>
              {option.subtitle && (
                <div className='option-subtitle'>{option.subtitle}</div>
              )}
            </div>

            {isSelected && (
              <span className='option-checkmark'>
                <img
                  src={checkmarkIcon}
                  alt='Selected'
                  width='22'
                  height='22'
                />
              </span>
            )}
          </div>
        )
      case 'tags':
        return (
          <div className='multi-select-option'>
            {option.emoji && (
              <span className='option-emoji'>{option.emoji}</span>
            )}
            <span className='option-label'>{option.label}</span>
            {option.desc && <span className='option-desc'>{option.desc}</span>}
          </div>
        )
      default:
        return (
          <div className='default-option'>
            {option.image && (
              <span className='option-image'>{option.image}</span>
            )}
            <span className='option-label'>{option.label}</span>
          </div>
        )
    }
  }

  const renderSelectedOption = (option: Option) => {
    if (CustomLabel) {
      return (
        <CustomLabel option={option} onRemove={() => handleRemove(option)} />
      )
    }

    return (
      <span key={option.id} className='selected-option'>
        {option.avatar && (
          <img
            src={option.avatar}
            alt={option.label}
            className='option-avatar-small'
          />
        )}
        {option.firstName && option.lastName
          ? `${option.lastName} ${option.firstName.charAt(0)}.`
          : option.label}
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleRemove(option)
          }}
        >
          ×
        </button>
      </span>
    )
  }

  return (
    <div className={getSelectClasses()} ref={selectRef}>
      <div className='select-input' onClick={handleToggle}>
        {(multiple || variant === 'tags') &&
        Array.isArray(value) &&
        value.length > 0 ? (
          <div className='selected-options'>
            {value.map(renderSelectedOption)}
          </div>
        ) : null}
        <input
          ref={inputRef}
          type='text'
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={
            value && !Array.isArray(value)
              ? (value as Option).label
              : placeholder
          }
        />
        <span className='select-arrow'>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen &&
        (CustomDropdown ? (
          <CustomDropdown
            options={filteredOptions}
            value={value}
            onSelect={handleSelect}
            searchTerm={searchTerm}
            multiple={multiple}
            variant={variant}
          />
        ) : (
          <div className='select-dropdown'>
            <ul className='options-list'>
              {filteredOptions.map((option) => (
                <li
                  key={option.id}
                  onClick={() => handleSelect(option)}
                  className={`option ${
                    (multiple || variant === 'tags') &&
                    Array.isArray(value) &&
                    value.some((v) => v.id === option.id)
                      ? 'selected'
                      : ''
                  }`}
                >
                  {renderOption(option)}
                </li>
              ))}
              {(creatable || variant === 'tags') &&
                searchTerm &&
                !filteredOptions.some(
                  (o) => o.label.toLowerCase() === searchTerm.toLowerCase()
                ) && (
                  <li
                    className='create-option'
                    onClick={() => handleCreateTag(searchTerm)}
                  >
                    Create "{searchTerm}"
                  </li>
                )}
            </ul>
          </div>
        ))}
    </div>
  )
}

export default Select
