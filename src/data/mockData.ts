import {Option} from '../components/Select'
import {PeopleOption} from '../components/CustomSelectMulti/CustomInputMulti'

import avatar1 from '../assets/Avatars-1.png'
import avatar2 from '../assets/Avatars-2.png'
import avatar3 from '../assets/Avatars-3.png'

export const products: Option[] = [
  {id: 1, label: 'List item', value: 'li1'},
  {id: 2, label: 'List item', value: 'll2'},
  {id: 3, label: 'List item', value: 'li3'},
  {id: 4, label: 'List item', value: 'li4'},
  {id: 5, label: 'List item', value: 'li5'},
  {id: 6, label: 'List item', value: 'li6'},
  {id: 7, label: 'List item', value: 'li7'},
  {id: 8, label: 'List item', value: 'li8'},
  {id: 9, label: 'List item', value: 'li9'},
  {id: 10, label: 'List item', value: 'li10'},
]

export const actionOptions: Option[] = [
  {
    id: 1,
    label: 'Title',
    value: 'title',
    subtitle: 'Subtitle',
    image: '✏️',
  },
  {
    id: 2,
    label: 'Title 2',
    value: 'title2',
    subtitle: 'Subtitle',
    image: '🗑️',
  },
  {
    id: 3,
    label: 'Title 3',
    value: 'title3',
    subtitle: 'Subtitle',
    image: '📤',
  },
  {
    id: 4,
    label: 'Title 4',
    value: 'title4',
    subtitle: 'Subtitle',
    image: '✏️',
  },
  {
    id: 5,
    label: 'Title 5',
    value: 'title5',
    subtitle: 'Subtitle',
    image: '🗑️',
  },
  {
    id: 6,
    label: 'Title 6',
    value: 'title6',
    subtitle: 'Subtitle',
    image: '📤',
  },
]

export const people: PeopleOption[] = [
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
  {id: 1, label: 'List item', value: 'li1'},
  {id: 2, label: 'List item', value: 'li2'},
  {id: 3, label: 'List item', value: 'li3'},
  {id: 4, label: 'List item', value: 'li4'},
]
