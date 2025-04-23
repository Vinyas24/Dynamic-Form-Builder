import React from 'react';

const FeildController = ({
  selectedType,
  setSelectedType,
  fieldLabel,
  setFieldLabel,
  dropdownOptions,
  setDropdownOptions,
  addField,
  fieldTypes
}) => {
  return (
    <div className="field-controls">
      <div className="control-group">
        <label className="control-label">Field Type:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="field-type-select"
        >
          {fieldTypes.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label className="control-label">Field Label:</label>
        <input
          type="text"
          value={fieldLabel}
          onChange={(e) => setFieldLabel(e.target.value)}
          placeholder="Enter field label"
          className="label-input"
        />
      </div>

      {selectedType === 'dropdown' && (
        <div className="control-group">
          <label className="control-label">Dropdown Options:</label>
          <input
            type="text"
            value={dropdownOptions}
            onChange={(e) => setDropdownOptions(e.target.value)}
            placeholder="Enter options (comma separated)"
            className="options-input"
          />
        </div>
      )}

      <button onClick={addField} className="add-field-btn">
        Add Field
      </button>
    </div>
  );
};

export default FeildController;
