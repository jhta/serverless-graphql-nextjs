import ReactModal from 'react-modal'
import React, { MouseEvent } from 'react'
import { useMutation } from '@apollo/client';
import { postExperienceMutation } from 'services/experiences/mutations';


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

ReactModal.setAppElement('#modal')

const Modal = () => {
  const [postExp, data] = useMutation(postExperienceMutation)
  const handleCreateExperience = async (e: MouseEvent) => {
    e.preventDefault()
    await postExp({
      variables: { input }
    })
  }

  const [modalIsOpen,setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <div>
        <h1>Create new experience</h1>
        <button onClick={handleCreateExperience}>Create</button>
      </div>
    </ReactModal>
  )
}

export default Modal