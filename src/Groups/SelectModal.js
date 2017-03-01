import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {toggleSelectGroupModal, saveGroupsItems} from '../actions/groups'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const SelectModal = ({groups, gModal, toggleSelectGroupModal, saveGroupsItems}) => {
  const groupsOptions = groups.map(g => <option value={g.id} key={g.id}>{g.name}</option>)

  const addToGroup = (e) => {
    e.preventDefault()
    const form = e.target
    saveGroupsItems({groupId: form.elements.group.value, itemId: gModal.item})
    form.reset()
    toggleSelectGroupModal()
  }

  return (
    <Modal
      isOpen={gModal.isOpen}
      style={customStyles}
      onRequestClose={() => toggleSelectGroupModal()}
      contentLabel="Group Select Modal">
      <form onSubmit={addToGroup}>
        <select name="group" className="form-control">
          {groupsOptions}
        </select>
        <button className="btn btn-primary btn-block mt-1" type="submit">
          <span className="fa fa-plus"></span>
          افزودن
        </button>
      </form>
    </Modal>
  )
}

export default connect(state => ({gModal: state.groups.modal, groups: state.groups.all}), {toggleSelectGroupModal, saveGroupsItems})(SelectModal)
