import React, { useState } from 'react';
import FieldControls from './FeildController';
import FieldRenderer from './FeildRender';

const FormBuilder = () => {
  const [fields, setFields] = useState([]);
  const [selectedType, setSelectedType] = useState('text');
  const [formData, setFormData] = useState({});
  const [fieldLabel, setFieldLabel] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState('');

  const fieldTypes = [
    { value: 'text', label: 'Text Input' },
    { value: 'dropdown', label: 'Dropdown' },
    { value: 'checkbox', label: 'Checkbox' }
  ];

  const addField = () => {
    if (!fieldLabel.trim()) {
      alert('Please enter a label for the field');
      return;
    }

    let newField;
    if (selectedType === 'dropdown') {
      const options = dropdownOptions.split(',').map(opt => opt.trim()).filter(opt => opt);
      if (options.length === 0) {
        alert('Please enter at least one option for the dropdown');
        return;
      }
      newField = {
        id: `field_${Date.now()}`,
        type: selectedType,
        label: fieldLabel,
        options,
        value: ''
      };
    } else {
      newField = {
        id: `field_${Date.now()}`,
        type: selectedType,
        label: fieldLabel,
        value: selectedType === 'checkbox' ? false : ''
      };
    }

    setFields([...fields, newField]);
    setFormData({ ...formData, [newField.id]: newField.value });
    setFieldLabel('');
    setDropdownOptions('');
  };

  const removeField = (fieldId) => {
    setFields(fields.filter(field => field.id !== fieldId));
    const updatedFormData = { ...formData };
    delete updatedFormData[fieldId];
    setFormData(updatedFormData);
  };

  const handleInputChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {};
    fields.forEach(field => {
      formattedData[field.label] = formData[field.id];
    });

    alert(
      'Form Data:\n' +
      Object.entries(formattedData)
        .map(([label, value]) => `${label}: ${value}`)
        .join('\n')
    );

    console.log('Form Submitted:', formattedData);
  };

  return (
    <div className="form-builder">
      <h2>Dynamic Form Builder</h2>
      <FieldControls
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        fieldLabel={fieldLabel}
        setFieldLabel={setFieldLabel}
        dropdownOptions={dropdownOptions}
        setDropdownOptions={setDropdownOptions}
        addField={addField}
        fieldTypes={fieldTypes}
      />
      <form onSubmit={handleSubmit} className="dynamic-form">
        {fields.map((field) => (
          <div key={field.id} className="form-field">
            <div className="field-header">
              <button
                type="button"
                onClick={() => removeField(field.id)}
                className="remove-field-btn"
              >
                ✕
              </button>
            </div>
            <FieldRenderer field={field} value={formData[field.id]} onChange={handleInputChange} />
          </div>
        ))}
        {fields.length > 0 && (
          <button type="submit" className="submit-btn">
            Submit Form
          </button>
        )}
      </form>
    </div>
  );
};

export default FormBuilder;
