import React from 'react';

const FieldRender = ({ field, value, onChange }) => {
  switch (field.type) {
    case 'text':
      return (
        <div className="field-container">
          <label className="field-label">{field.label}</label>
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(field.id, e.target.value)}
            className="form-input"
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
        </div>
      );
    case 'dropdown':
      return (
        <div className="field-container">
          <label className="field-label">{field.label}</label>
          <select
            value={value || ''}
            onChange={(e) => onChange(field.id, e.target.value)}
            className="form-select"
          >
            <option value="">Select an option</option>
            {field.options.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      );
    case 'checkbox':
      return (
        <div className="field-container checkbox-field">
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={value || false}
              onChange={(e) => onChange(field.id, e.target.checked)}
              className="form-checkbox"
              id={`checkbox_${field.id}`}
            />
            <label htmlFor={`checkbox_${field.id}`} className="checkbox-label">
              {field.label}
            </label>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default FieldRender;
