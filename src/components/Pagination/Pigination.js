import React from 'react'
import * as UI from './UI'
import { ArrowheadLeftOutline, ArrowIosForwardOutline, ArrowIosBackOutline, ArrowheadRightOutline } from '../Icons'

export default ({ setCurrentPage, currentPage, firstItem, lastItem, allEmployees }) => {

  /** COUNT OF PAGINATION ITEMS */
  const pagesCount = Math.ceil(allEmployees / 10)

  const isPaginationDisable = lastItem === allEmployees || currentPage >= pagesCount
  return (
    <UI.Container className='d-flex align-items-center'>
      { /** FIRST ITEMS */}
      <UI.StyledButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(1)}>
        <ArrowheadLeftOutline />
      </UI.StyledButton>
      { /** PREV ITEMS */}
      <UI.StyledButton
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}>
        <ArrowIosBackOutline />
      </UI.StyledButton>
      <UI.Text>{firstItem}-{lastItem} of {allEmployees}</UI.Text>
      { /** NEXT ITEMS */}
      <UI.StyledButton
        disabled={isPaginationDisable}
        onClick={() => setCurrentPage(currentPage + 1)}>
        <ArrowIosForwardOutline />
      </UI.StyledButton>
      { /** LAST ITEMS */}
      <UI.StyledButton
        disabled={isPaginationDisable}
        onClick={() => setCurrentPage(pagesCount)}>
        <ArrowheadRightOutline />
      </UI.StyledButton>
    </UI.Container>
  )
}