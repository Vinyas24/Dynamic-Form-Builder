import React from 'react';
import './App.css';
import FormBuilder from './components/FormBuilder';

const App = () => {
  return (
    <div className="app-container">
      <FormBuilder />
    </div>
  );
};

export default App;














// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [fields, setFields] = useState([]);
//   const [selectedType, setSelectedType] = useState('text');
//   const [formData, setFormData] = useState({});
//   const [fieldLabel, setFieldLabel] = useState('');
//   const [dropdownOptions, setDropdownOptions] = useState('');

//   const fieldTypes = [
//     { value: 'text', label: 'Text Input' },
//     { value: 'dropdown', label: 'Dropdown' },
//     { value: 'checkbox', label: 'Checkbox' }
//   ];

//   const addField = () => {
//     if (!fieldLabel.trim()) {
//       alert('Please enter a label for the field');
//       return;
//     }

//     let newField;
//     if (selectedType === 'dropdown') {
//       const options = dropdownOptions.split(',').map(opt => opt.trim()).filter(opt => opt);
//       if (options.length === 0) {
//         alert('Please enter at least one option for the dropdown');
//         return;
//       }
//       newField = {
//         id: `field_${Date.now()}`,
//         type: selectedType,
//         label: fieldLabel,
//         options: options,
//         value: ''
//       };
//     } else {
//       newField = {
//         id: `field_${Date.now()}`,
//         type: selectedType,
//         label: fieldLabel,
//         value: selectedType === 'checkbox' ? false : ''
//       };
//     }

//     setFields([...fields, newField]);
//     setFormData({ ...formData, [newField.id]: newField.value });
//     setFieldLabel('');
//     setDropdownOptions('');
//   };

//   const removeField = (fieldId) => {
//     setFields(fields.filter(field => field.id !== fieldId));
//     const newFormData = { ...formData };
//     delete newFormData[fieldId];
//     setFormData(newFormData);
//   };

//   const handleInputChange = (fieldId, value) => {
//     setFormData({
//       ...formData,
//       [fieldId]: value
//     });
//   };

//   const renderField = (field) => {
//     switch (field.type) {
//       case 'text':
//         return (
//           <div className="field-container">
//             <label className="field-label">{field.label}</label>
//             <input
//               type="text"
//               value={formData[field.id] || ''}
//               onChange={(e) => handleInputChange(field.id, e.target.value)}
//               className="form-input"
//               placeholder={`Enter ${field.label.toLowerCase()}`}
//             />
//           </div>
//         );
//       case 'dropdown':
//         return (
//           <div className="field-container">
//             <label className="field-label">{field.label}</label>
//             <select
//               value={formData[field.id] || ''}
//               onChange={(e) => handleInputChange(field.id, e.target.value)}
//               className="form-select"
//             >
//               <option value="">Select an option</option>
//               {field.options.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//         );
//       case 'checkbox':
//         return (
//           <div className="field-container checkbox-field">
//             <div className="checkbox-wrapper">
//               <input
//                 type="checkbox"
//                 checked={formData[field.id] || false}
//                 onChange={(e) => handleInputChange(field.id, e.target.checked)}
//                 className="form-checkbox"
//                 id={`checkbox_${field.id}`}
//               />
//               <label htmlFor={`checkbox_${field.id}`} className="checkbox-label">
//                 {field.label}
//               </label>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Create a formatted data object with labels instead of IDs
//     const formattedData = {};
//     fields.forEach(field => {
//       formattedData[field.label] = formData[field.id];
//     });

//     // Create a nicely formatted string for the alert
//     const formattedString = Object.entries(formattedData)
//       .map(([label, value]) => `${label}: ${value}`)
//       .join('\n');

//     alert('Form Data:\n' + formattedString);
//     console.log('Form Data:', formattedData);
//   };

//   return (
//     <div className="form-builder">
//       <h2>Dynamic Form Builder</h2>
      
//       <div className="field-controls">
//         <div className="control-group">
//           <label className="control-label">Field Type:</label>
//           <select
//             value={selectedType}
//             onChange={(e) => setSelectedType(e.target.value)}
//             className="field-type-select"
//           >
//             {fieldTypes.map(type => (
//               <option key={type.value} value={type.value}>
//                 {type.label}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="control-group">
//           <label className="control-label">Field Label:</label>
//           <input
//             type="text"
//             value={fieldLabel}
//             onChange={(e) => setFieldLabel(e.target.value)}
//             placeholder="Enter field label/question"
//             className="label-input"
//           />
//         </div>

//         {selectedType === 'dropdown' && (
//           <div className="control-group">
//             <label className="control-label">Dropdown Options:</label>
//             <input
//               type="text"
//               value={dropdownOptions}
//               onChange={(e) => setDropdownOptions(e.target.value)}
//               placeholder="Enter options (comma separated)"
//               className="options-input"
//             />
//           </div>
//         )}

//         <button onClick={addField} className="add-field-btn">
//           Add Field
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="dynamic-form">
//         {fields.map((field) => (
//           <div key={field.id} className="form-field">
//             <div className="field-header">
//               <button
//                 type="button"
//                 onClick={() => removeField(field.id)}
//                 className="remove-field-btn"
//               >
//                 ✕
//               </button>
//             </div>
//             {renderField(field)}
//           </div>
//         ))}
        
//         {fields.length > 0 && (
//           <button type="submit" className="submit-btn">
//             Submit Form
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default App; 