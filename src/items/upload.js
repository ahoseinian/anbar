import React from 'react'
import {SERVER_PATH} from '../config'
import Dropzone from 'react-dropzone'
import request from 'superagent'


export default ({id, uploadSuccess}) => {
  const onDrop = (files) => {
    var req = request.post(SERVER_PATH + '/backend/upload.php')
    req.field('id', id)
    files.forEach((file) => {
      req.attach('image', file)
    })
    req.end((err, r) => uploadSuccess())
  }

  return (
    <Dropzone onDrop={onDrop} multiple={false} style={{
      cursor: 'pointer'
    }}>
      <button className="btn btn-warning">
        <span className="fa fa-image"></span>
      </button>
    </Dropzone>
  )
}
