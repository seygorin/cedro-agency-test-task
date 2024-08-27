import {Option} from '../components/Select/Select'
import avatar1 from '../assets/Avatars-1.png'
import avatar2 from '../assets/Avatars-2.png'
import avatar3 from '../assets/Avatars-3.png'

export const products: Option[] = [
  {id: 1, label: 'Apple', value: 'apple'},
  {id: 2, label: 'Banana', value: 'banana'},
  {id: 3, label: 'Cherry', value: 'cherry'},
  {id: 4, label: 'Date', value: 'date'},
  {id: 5, label: 'Elderberry', value: 'elderberry'},
]

export const actionOptions: Option[] = [
  {
    id: 1,
    label: 'Edit',
    value: 'edit',
    subtitle: 'Modify the item',
    image: '✏️',
  },
  {
    id: 2,
    label: 'Delete',
    value: 'delete',
    subtitle: 'Remove the item',
    image: '🗑️',
  },
  {
    id: 3,
    label: 'Share',
    value: 'share',
    subtitle: 'Share with others',
    image: '📤',
  },
]

export const people: Option[] = [
  {
    id: 1,
    label: 'Соловьёв Александр',
    value: 'solovyov',
    subtitle: 'example1@mail.com',
    avatar: avatar3,
    firstName: 'Александр',
    lastName: 'Соловьёв',
  },
  {
    id: 2,
    label: 'Куликов Владимир',
    value: 'kulikov',
    subtitle: 'example2@mail.com',
    avatar: avatar1,
    firstName: 'Куликов',
    lastName: 'Владимир',
  },
  {
    id: 3,
    label: 'Кузнецов Иван',
    value: 'kuznecov',
    subtitle: 'example3@mail.com',
    avatar: avatar2,
    firstName: 'Кузнецов',
    lastName: 'Иван',
  },
  {
    id: 4,
    label: 'Алексеев Алексей',
    value: 'alex',
    subtitle: 'example4@mail.com',
    avatar: avatar3,
    firstName: 'Алексеев',
    lastName: 'Алексей',
  },
  {
    id: 5,
    label: 'Макаров Макар',
    value: 'makar',
    subtitle: 'example5@mail.com',
    avatar: avatar1,
    firstName: 'Макаров',
    lastName: 'Макар',
  },
  {
    id: 6,
    label: 'Ковалёв Владимир',
    value: 'kovalev',
    subtitle: 'example6@mail.com',
    avatar: avatar2,
    firstName: 'Ковалёв',
    lastName: 'Владимир',
  },
]

export const tags: Option[] = [
  {id: 1, label: 'React', value: 'react'},
  {id: 2, label: 'JavaScript', value: 'javascript'},
  {id: 3, label: 'CSS', value: 'css'},
  {id: 4, label: 'HTML', value: 'html'},
]
