# Custom Select Component

This project implements a flexible and customizable Select component for React applications. It provides a rich set of features to enhance user interaction and data selection in various scenarios.

## Features

- **Multiple Selection Modes**: Supports both single and multiple selection.
- **Flexible Data Handling**: Works with various data types and formats.
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
- `variant`: Specifies the display variant of the select component.
- `customDropdown`: Optional prop for providing a custom dropdown component.
- `customLabel`: Optional prop for providing a custom label component.

## Usage

```jsx
import Select from './components/Select/Select'

// Example usage
;<Select
  options={options}
  value={selectedValue}
  onChange={handleChange}
  placeholder='Select an option'
  searchable
  multiple
/>
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`