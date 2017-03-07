import React from 'react'

export const stringFixture = 'A string'

export const markdownFixture = 'This is **strong**. This is _italic_. This is [a link](https://egghead.io). This is `some code`.'

export const nameFixture = 'Jane'

export const urlFixture = 'https://google.com'

export const avatarImageUrlFixture = 'http://placehold.it/150x150?text=A+image'

export const apiFixture = 'http://www.fakeresponse.com/api/?sleep=2'

export const ComponentFixture = () => (
  <div>
    A component
  </div>
)

export const eventHandlerFixture = () => {
  alert('event handler called')
}
