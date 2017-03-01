import React from 'react' 
import { storiesOf } from '@kadira/storybook' 
import Switcher from '.'

const decoratorClasses = 'flex flex-column content-center justify-around flex-wrap items-center vh-100 bg-navy'

const sampleOptions = [
	{ value: 'one', label: 'One' },
	{ value: 'two', label: 'Two' },
	{ value: 'three', label: 'Three' },
	{ value: 'four', label: 'Four' },
	{ value: 'five', label: 'Five' }
]

storiesOf('Select')
  .addDecorator((story) => (<div className={decoratorClasses}>{story()}</div>))
  .addWithInfo('Select', () => (
    <Switcher options={sampleOptions} name='example' /> 
  ))

