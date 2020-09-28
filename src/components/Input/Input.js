import React from 'react'
import * as UI from './UI'

export default ({ onChange }) => {

  return (
    <UI.Container>
      <UI.StyledLabel>
        Filter employees by label
    </UI.StyledLabel>
      <div className='d-flex'>
        <UI.StyledInput
          className='mr-2'
          onChange={onChange}
          type="text"
          placeholder='Enter label' />
      </div>
    </UI.Container>
  )
}