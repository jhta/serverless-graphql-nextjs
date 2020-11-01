import React from 'react'
import ReactModal from 'react-modal'
import styles from './modal.module.css'

import { isOpenModal } from 'store/selectors'
import { hideModal as hideModalAction } from 'store/ui/actions'
import { useSelect, useDispatch } from 'store/hooks'

ReactModal.setAppElement('#modal')

const Modal = ({ children }: any) => {
  const isModalOpen = useSelect(isOpenModal)
  const hideModal = useDispatch(hideModalAction())

  const handleCloseModal = () => {
    hideModal()
  }

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      { children }
    </ReactModal>
  )
}

export default Modal