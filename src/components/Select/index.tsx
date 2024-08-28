import React, {useState, useRef, useEffect} from 'react'
import './Select.css'
import ArrowDown from '../../assets/icons/arrow-down.svg'
import ArrowUp from '../../assets/icons/arrow-up.svg'
import SearchIcon from '../../assets/icons/pupa.svg'
import X from '../../assets/icons/ex.svg'

export type BaseOption = {
  value: string | number
  label: string
}

export type ExtendedOption = BaseOption & {
  id?: number
  subtitle?: string
  image?: string
  avatar?: string
  firstName?: string
  lastName?: string
}

export type Option<T extends BaseOption = ExtendedOption> = T

type SelectProps<T extends BaseOption> = {
  options: T[]
  value: T | T[] | null
  onChange: (value: T | T[] | null) => void
  multiple?: boolean
  searchable?: boolean
  creatable?: boolean
  placeholder?: string
  onCreateOption?: (inputValue: string) => void
  customDropdown?: React.ComponentType<CustomDropdownProps<T>>
  customLabel?: React.ComponentType<CustomLabelProps<T>>
  customInput?: React.ComponentType<CustomInputProps<T>>
  renderOption?: (option: T) => React.ReactNode
  label?: string
  hint?: string
  useSearchIcon?: boolean
  disabled?: boolean
  showErrorState?: boolean
}

export type CustomInputProps<T extends BaseOption> = {
  value: T | T[] | null
  searchTerm: string
  placeholder: string
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onRemove: (option: T) => void
}

export type CustomDropdownProps<T extends BaseOption> = {
  options: T[]
  value: T | T[] | null
  onSelect: (option: T) => void
  searchTerm: string
  multiple: boolean
  onCreateOption?: (inputValue: string) => void
}

export type CustomLabelProps<T extends BaseOption> = {
  option: T
  onRemove: (option: T) => void
}

function Select<T extends Option>({
  options,
  value,
  onChange,
  multiple = false,
  searchable = false,
  creatable = false,
  placeholder = 'Select...',
  onCreateOption,
  customDropdown: CustomDropdown,
  customLabel: CustomLabel,
  customInput: CustomInput,
  renderOption,
  label,
  hint,
  useSearchIcon = false,
  disabled = false,
  showErrorState = true,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [hasError, setHasError] = useState(false)
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
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleToggle = () => {
    if (!disabled && filteredOptions.length > 0) {
      setIsOpen(!isOpen)
      if (!isOpen && inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  const handleSelect = (option: T) => {
    if (multiple) {
      const newValue = Array.isArray(value) ? value.slice() : []
      const index = newValue.findIndex((v) => v.value === option.value)
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
  }

  const handleRemove = (option: T) => {
    if (multiple && Array.isArray(value)) {
      onChange(value.filter((v) => v.value !== option.value))
    } else {
      onChange(null)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
    const newFilteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(newSearchTerm.toLowerCase())
    )
    setHasError(
      showErrorState && newFilteredOptions.length === 0 && newSearchTerm !== ''
    )
    setIsOpen(newFilteredOptions.length > 0 || (creatable && !showErrorState))
  }

  const handleCreateOption = () => {
    if (creatable && onCreateOption && searchTerm) {
      onCreateOption(searchTerm)
      setSearchTerm('')
    }
  }

  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options

  const renderDefaultOption = (option: T) => (
    <div>{renderOption ? renderOption(option) : option.label}</div>
  )

  const renderDefaultLabel = (option: T) => (
    <div className='select-label'>
      {option.label}
      <button onClick={() => handleRemove(option)}>
        <img src={X} alt='delete' />
      </button>
    </div>
  )

  const hasSelectedOptions =
    multiple && Array.isArray(value) && value.length > 0

  const getPlaceholder = () => {
    if (hasSelectedOptions) {
      return ''
    }
    if (value && !Array.isArray(value)) {
      return value.label
    }
    return placeholder
  }

  return (
    <div
      className={`select-container ${disabled ? 'disabled' : ''}`}
      ref={selectRef}
    >
      {label && <label className='label'>{label}</label>}
      <div
        className={`select-input ${hasError ? 'error' : ''}`}
        onClick={handleToggle}
      >
        {CustomInput ? (
          <CustomInput
            value={value}
            searchTerm={searchTerm}
            placeholder={getPlaceholder()}
            onInputChange={handleInputChange}
            onRemove={handleRemove}
          />
        ) : (
          <>
            {hasSelectedOptions && (
              <div className='selected-options'>
                {Array.isArray(value) &&
                  value.map((v) =>
                    CustomLabel ? (
                      <CustomLabel
                        key={v.value}
                        option={v}
                        onRemove={handleRemove}
                      />
                    ) : (
                      <React.Fragment key={v.value}>
                        {renderDefaultLabel(v)}
                      </React.Fragment>
                    )
                  )}
              </div>
            )}
            <div
              className={`search-input-wrapper ${
                useSearchIcon && hasSelectedOptions ? 'with-search-icon' : ''
              }`}
            >
              {useSearchIcon && !hasSelectedOptions && (
                <span className='search-icon'>
                  <img src={SearchIcon} alt='Search' />
                </span>
              )}
              <input
                ref={inputRef}
                type='text'
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={getPlaceholder()}
                readOnly={!searchable || disabled}
                disabled={disabled}
                className='search-input'
              />
            </div>
            {!useSearchIcon && (
              <span className='arrow-icon'>
                {isOpen ? (
                  <img src={ArrowUp} alt='Arrow Up' />
                ) : (
                  <img src={ArrowDown} alt='Arrow Down' />
                )}
              </span>
            )}
          </>
        )}
      </div>
			{hint && <div className='select-hint'>{hint}</div>}
      {isOpen &&
        !disabled &&
        (filteredOptions.length > 0 || (creatable && !showErrorState)) &&
        (CustomDropdown ? (
          <CustomDropdown
            options={filteredOptions}
            value={value}
            onSelect={handleSelect}
            searchTerm={searchTerm}
            multiple={multiple}
            onCreateOption={handleCreateOption}
          />
        ) : (
          <div className='select-dropdown'>
            <ul className='options-list'>
              {filteredOptions.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className={`option ${
                    (multiple &&
                      Array.isArray(value) &&
                      value.some((v) => v.value === option.value)) ||
                    (!multiple && value && (value as T).value === option.value)
                      ? 'selected'
                      : ''
                  }`}
                >
                  {renderDefaultOption(option)}
                </li>
              ))}
              {creatable &&
                searchTerm &&
                !filteredOptions.some(
                  (o) => o.label.toLowerCase() === searchTerm.toLowerCase()
                ) && (
                  <li className='create-option' onClick={handleCreateOption}>
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