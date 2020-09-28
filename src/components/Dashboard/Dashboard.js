import React, { useState, useEffect, useCallback } from 'react'
import * as UI from './UI'
import Pagination from '../Pagination/Pigination'
import Input from '../Input/Input'
import { getAllEmployees } from '../../api/get'
import { Col } from 'react-bootstrap'
import { PaintIcon, AddIcon, EditIcon, TrashIcon } from '../Icons'
import { InputToast, ToastWithColors } from '../Toasts'
import Loader from '../Loader/Loader'

export default () => {
  const [employees, setEmployees] = useState({
    isLoading: true,
    error: false,
    data: [],
    filteredData: false
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [isToastOpen, setIsToastOpen] = useState({
    isInputOpen: false,
    areColorsOpen: false,
    uuid: '',
  })
  const [data, setData] = useState({})
  const [filteredValue, setFilteredValue] = useState('')

  /** FETCH ALL EMPLOYEES */
  const fetchEmployees = async () => {
    try {
      await getAllEmployees()
        .then(result => {
          setEmployees({ ...employees, data: result.data, isLoading: false })
        })
    } catch (error) {
      if (error.message.includes('500')) {
        fetchEmployees()
      } else {
        setEmployees({ ...employees, error: true })
      }
    }
  }

  /** ADD, EDIT LOCAL STORAGE DATA;
   *  REMOVE FROM LOCAL STORAGE AND FETCHED EMPLOYYES*/
  const addDataToStorage = (value) => {
    const storageData = JSON.parse(localStorage.getItem('Data')) || []

    let isItemExist = storageData.find(item => item.uuid === data.uuid)

    if (storageData.length === 0 || !isItemExist) {
      storageData.unshift(data)
    } else {
      for (let index = 0; index < storageData.length; index++) {
        if (storageData[index].uuid === data.uuid) {
          /** Delete label prop if passed value to function is empty string */
          if (value === '') {
            /**  Loop employees data and remove prop label of the element with matched id */
            for (let index = 0; index < employees.data.length; index++) {
              if (data.uuid === employees.data[index].uuid) {
                const allEmployees = employees.data

                delete allEmployees[index].label
                setEmployees({ ...employees, data: allEmployees })
              }
            }

            /** if storage has only label prop - remove whole object - else remove only prop label */
            storageData[index].background ?
              delete storageData[index].label :
              storageData.splice(index, 1)

          } else if (value.includes('#')) {
            storageData[index].background = value
          } else {
            storageData[index].label = value
          }

        }
      }
    }
    localStorage.setItem('Data', JSON.stringify(storageData));

    value !== '' && addDataToEmployees()

    isToastOpen && setIsToastOpen({})

    if (filteredValue) {
      filterByLabel(filteredValue)
    }
  }

  /** ADD DATA FROM LOCAL STORAGE TO EMPLOYEES ARRAY OF DATA */
  const addDataToEmployees = useCallback(() => {
    /** get data from localStorage */
    const storageData = JSON.parse(localStorage.getItem('Data')) || []
    /** loop employees and check for everyone of the employees - isHas another data in the localStorage  */
    for (let index = 0; index < employees.data.length; index++) {

      for (let i = 0; i < storageData.length; i++) {

        if (storageData[i].uuid === employees.data[index].uuid) {
          const newData = { ...employees.data[index], ...storageData[i] }
          const arrOfEmployees = employees.data

          arrOfEmployees[index] = newData
          setEmployees({ ...employees, data: arrOfEmployees })
        }
      }
    }
  }, [employees.data])

  /** FILTER BY LABEL */
  const filterByLabel = (label) => {
    setFilteredValue(label)
    const filteredEmployees = employees.data.filter(employee => employee.label === label)

    if (label.length === 0) {
      // const employeesData = employees
      // delete employeesData.filteredData
      currentPage !== 1 && setCurrentPage(1)
      setEmployees({ ...employees, filteredData: false })
    } else {
      currentPage !== 1 && setCurrentPage(1)
      setEmployees({ ...employees, filteredData: filteredEmployees })
    }

  }

  /** CHOOSE CORRECT AVATAR */
  const chooseAvatarHandler = (avatar) => {
    if (avatar === '0' ||
      avatar.includes('data:') ||
      avatar.includes('.us/503')) {
      return '/images/Avatar.png'
    } else {
      return avatar
    }
  }

  /** RETURN CORRECT OUTPUT (BIO) */
  const fixBioHandler = (bio) => {
    if (bio.includes('<p>')) {
      let replaced = bio.replace('<p>', '')
      return replaced.replace('</p>', '')
    } else if (bio.includes('<pre>')) {
      let replaced = bio.replace('<pre>', '')
      return replaced.replace('</pre>', '')
    } else if (!bio || bio === '0') {
      return 'No bio.'
    } else {
      return bio
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  useEffect(() => {
    addDataToEmployees()
  }, [addDataToEmployees])

  if (employees.error) {
    return (
      <div style={{ width: '100%', top: '20%', textAlign: 'center' }}>
        <b>ERROR:</b> Reload the page.
      </div>)
  }

  if (employees.isLoading) {
    return <Loader />
  }
  //** GET CURRENT ITEMS (EMPLOYEES) */
  const lastItem = (currentPage * 10)
  const firstItem = lastItem - 10

  const currentItems = employees.filteredData ?
    employees.filteredData.slice(firstItem, lastItem) :
    employees.data.slice(firstItem, lastItem)

  return (
    <>
      {/** HEADER */}
      <UI.Header>Explore more
      <span className='thin'> about the employees.</span>
      </UI.Header>
      {/** INPUT FOR FILTERING BY VALUE */}
      <Input
        onChange={(event) => filterByLabel(event.target.value)} />
      <UI.Container>
        {/** TABLE */}
        <UI.MainRow >
          <Col>Name</Col>
          <Col md={2}>Title</Col>
          <Col md={2}>Company</Col>
          <Col md={3}>Bio</Col>
          <Col>Actions</Col>
        </UI.MainRow>

        {currentItems.map((item, index) =>
          <UI.StyledRow className={index % 2 === 1 && 'odd'} key={item.uuid}>
            <UI.StyledCol className='d-flex align-items-center'>
              {/** AVATAR */}
              <UI.ImgContainer>
                <img src={chooseAvatarHandler(item.avatar)} alt='avatar' />
              </UI.ImgContainer>
              {/** NAME */}
              <UI.StyledField>{item.name}</UI.StyledField>
            </UI.StyledCol>
            {/** JOB TITLE */}
            <UI.StyledCol md={2}>{item.title}</UI.StyledCol>
            {/** COMPANY NAME */}
            <UI.StyledCol md={2}>{item.company}</UI.StyledCol>
            {/** BIO */}
            <UI.StyledCol md={3}>{fixBioHandler(item.bio)}</UI.StyledCol>
            {/** ACTIONS BUTTONS */}
            <Col className='d-flex align-items-center pl-1 pr-1'>

              {item.label ?
                <>
                  <UI.StyledField className='mr-2'>{item.label}</UI.StyledField>
                  <UI.AddButton
                    className='paint mr-2'
                    onClick={() => {
                      setIsToastOpen({ isInputOpen: true, areColorsOpen: false, uuid: item.uuid })
                      setData({ uuid: item.uuid, label: item.label })
                    }}><EditIcon />
                  </UI.AddButton>
                  <UI.AddButton onClick={() => {
                    setData({ uuid: item.uuid })
                    addDataToStorage('')
                  }}
                    className='paint mr-2'>
                    <TrashIcon size='14' />
                  </UI.AddButton>
                </> :
                <UI.AddButton
                  onClick={() => {
                    setIsToastOpen({ isInputOpen: true, areColorsOpen: false, uuid: item.uuid })
                    setData({ uuid: item.uuid })
                  }}
                  className='mr-2'>
                  Add label <AddIcon className='ml-1' size='16' />
                </UI.AddButton>}

              <UI.AddButton
                onClick={() => {
                  setIsToastOpen({ isInputOpen: false, areColorsOpen: true, uuid: item.uuid })
                  setData({ uuid: item.uuid })
                }}
                className='paint'>
                <PaintIcon />
              </UI.AddButton>

              {/** TOASTS */}
              {isToastOpen.uuid === item.uuid &&
                <>
                  <InputToast
                    isOpen={isToastOpen}
                    setIsOpen={setIsToastOpen}
                    onChange={(event) => setData({ ...data, label: event.target.value })}
                    disabled={!data.label || data.label.length < 3}
                    data={data}
                    setData={setData}
                    addDataToEmployees={addDataToEmployees}
                    onClick={() => addDataToStorage(data.label)}
                  />
                  <ToastWithColors
                    setData={setData}
                    data={data}
                    isOpen={isToastOpen}
                    setIsOpen={setIsToastOpen}
                    onClick={() => addDataToStorage(data.background)}
                  />
                </>
              }
              {/** LINE-BACKGROUND */}
            </Col>
            {item.background &&
              <UI.ColorElement background={item.background} />
            }
          </UI.StyledRow>
        )}

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          firstItem={firstItem + 1}
          lastItem={lastItem}
          allEmployees={employees.filteredData ? employees.filteredData.length : employees.data.length} />
      </UI.Container>

    </>
  )
}