import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {NodeFixture} from '../../utils/fixtures'
import List from '.'

const exampleItems = [
  NodeFixture, 
  NodeFixture,
  NodeFixture,
]

storiesOf('List')
  .addWithInfo(
    'Info',
    'Used to display a list of items',
    () => (
      <List items={exampleItems} />
    ),
  )
  .addWithPropsCombinations(
    'Combinations',
    List, 
    {
      items: [exampleItems],
    },
  )
