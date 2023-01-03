// 1 - Dropdown comece fechado
// 2- Dropdown mostre opções quando for clicado
// 3- Quando sleecionar uma opção fechar o dropdown e 
// mostrar qual opção foi mostrada

// TDD

import React, { useState } from 'react';


export const Dropdown = ({title, options, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false)

  const  handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false)
  }

  return (
        <div className='c-dropdown'>
        <button onClick={() => setIsOpen(true)}>{title}</button>
        {isOpen && (
          <ul role="menu">
            {options.map((option) => (
              <li key={option} role="menuitem" onClick={() => handleSelection(option)}>{option}</li>
            ))}
          </ul>
        )}
        </div>
  )
}

export default Dropdown;