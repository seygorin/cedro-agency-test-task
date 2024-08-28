# Custom Select Component

This project implements a flexible and customizable Select component for React applications. It provides a rich set of features to enhance user interaction and data selection in various scenarios, following best practices in TypeScript and React development.

## Features

- **Multiple Selection Modes**: Supports both single and multiple selection.
- **Flexible Data Handling**: Works with various data types and formats, utilizing TypeScript generics for type safety.
- **Customizable Dropdown**: Offers a default dropdown with the option to provide a custom implementation.
- **Customizable Labels**: Supports custom rendering of selected option labels.
- **Search Functionality**: Enables users to search through options.
- **Option Creation**: Allows creation of new options on-the-fly.
- **Removable Options**: Users can remove selected options easily.
- **Various Display Variants**:
  - Default Select
  - Action Sheet
  - Multi-Select
  - Tags / Combobox

## Component Variants

1. **Default Select**: A standard dropdown for selecting single items.
2. **Action Sheet**: Displays options with additional details and icons.
3. **Multi-Select**: Allows selection of multiple items, often used for selecting people or categories.
4. **Combobox with Tags**: Enables selection and creation of multiple tags.

## Key Props

- `options`: Array of selectable options.
- `value`: Currently selected option(s).
- `onChange`: Callback function for handling selection changes.
- `multiple`: Enables multi-select mode when true.
- `searchable`: Enables search functionality when true.
- `creatable`: Allows creation of new options when true.
- `placeholder`: Placeholder text for the select input.
- `customDropdown`: Optional prop for providing a custom dropdown component.
- `customLabel`: Optional prop for providing a custom label component.
- `customInput`: Optional prop for providing a custom input component.
- `renderOption`: Optional function for custom rendering of options.
- `label`: Optional label for the select component.
- `hint`: Optional hint text for the select component.
- `useSearchIcon`: Optional flag to display a search icon.
- `disabled`: Optional flag to disable the select component.
- `showErrorState`: Optional flag to display error state.

## Usage

```jsx
import Select from './components/Select'

// Example usage
const MyComponent = () => {
  const [value, setValue] = useState(null)
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]

  return (
    <Select<ExtendedOption>
      options={options}
      value={value}
      onChange={setValue}
      placeholder='Select an option'
      searchable
      multiple
      label='My Select'
      hint='Choose one or more options'
    />
  )
}
```

## Advanced Customization

The Select component supports advanced customization through custom dropdown, label, and input components:

```jsx
import CustomDropdown from './CustomDropdown'
import CustomLabel from './CustomLabel'
import CustomInput from './CustomInput'
;<Select
  // ...other props
  customDropdown={CustomDropdown}
  customLabel={CustomLabel}
  customInput={CustomInput}
/>
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
