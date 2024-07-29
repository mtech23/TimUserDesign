import React, { useState } from 'react';

const SingleSelectCheckbox = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
                                        <div class="checkbox-wrapper-31">
                                        <input type="checkbox"  checked={selectedOption === 'option1'}
                                              onChange={() => handleCheckboxChange('option1')} />
                                           <svg viewBox="0 0 35.6 35.6">
                                             <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                             <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                             <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                           </svg>
                                       </div>
      <br />
      <div class="checkbox-wrapper-31">
                                        <input type="checkbox"  checked={selectedOption === 'option2'}
                                              onChange={() => handleCheckboxChange('option2')} />
                                           <svg viewBox="0 0 35.6 35.6">
                                             <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                             <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                             <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                           </svg>
                                       </div>
      <br />
      <div class="checkbox-wrapper-31">
                                        <input type="checkbox"  checked={selectedOption === 'option1'}
                                              onChange={() => handleCheckboxChange('option1')} />
                                           <svg viewBox="0 0 35.6 35.6">
                                             <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                             <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                             <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                           </svg>
                                       </div>
    </div>
  );
};

export default SingleSelectCheckbox;