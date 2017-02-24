import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {stringFixture} from '../../utils/Fixtures'
import Heading, {levels} from '.'

storiesOf('Heading')

  .addWithInfo('API', () => (
    <Heading level='1'>
      {stringFixture}
    </Heading>
  ))

  .addWithPropsCombinations('Combinations', Heading, {
    level: levels,
    children: [stringFixture]
  })
