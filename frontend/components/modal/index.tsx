import ReactModal from 'react-modal'
import React, { MouseEvent } from 'react'
import { useMutation } from '@apollo/client';
import { postExperienceMutation } from 'services/experiences/mutations';
import Store from 'store'
import { UI_ACTION_NAMES } from 'store/ui/types'


const input = {
  userId: 123,
  description: 'This is a nice description',
  labels: {
    money: 8,
    spirituality: 5,
    health: 10,
    career: 8,
    love: 7,
    social: 10,
    hobbies: 7,
    growth: 10,
  },
}

const useSelectIsModalOpen = () => {
  const { state } = React.useContext(Store);
  return state.ui.modalIsOpen
  
}

const useDispatchHideModal = () => {
  const store = React.useContext(Store);

  return () => store.dispatch({
    type: UI_ACTION_NAMES.HIDE_MODAL,
    payload: undefined,
  })
}

ReactModal.setAppElement('#modal')

const Modal = () => {
  const [postExp, data] = useMutation(postExperienceMutation)
  const isModalOpen = useSelectIsModalOpen()
  const hideModal = useDispatchHideModal()

  const handleCreateExperience = async (e: MouseEvent) => {
    e.preventDefault()
    await postExp({
      variables: { input }
    })
  }

  const handleCloseModal = () => {
    console.log('hande close', hideModal)
    hideModal()
  }

  return (
    <ReactModal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
      <div>
        <h1>Create new experience</h1>
        <button onClick={handleCreateExperience}>Create</button>
      </div>
    </ReactModal>
  )
}

export default Modal