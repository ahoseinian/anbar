import React from 'react';

export default ({label, children}) => (
  <div className="form-group row">
    <label className="col-4 col-form-label">
      {label}
    </label>
    <div className="col-8">
      {children}
    </div>
  </div>
);
