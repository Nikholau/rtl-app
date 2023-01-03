import Dropdown from "./Dropdown";
import {screen, render, userEvent} from '../../tests'

const options = ['Nikholas', 'Nickolas', 'Nicholas', 'Nikolas'] 
const title = "Selecione uma opção" 
describe('Dropdown', () => {

  //Dropdown comece fechado

  it('should start closed', () => {
    render(
    <Dropdown 
      title={title}
      options={options}
      onSelect={() => {}}
    />
  );

  expect(screen.queryByText(options[0])).not.toBeInTheDocument();
  expect(screen.queryByText(options[1])).not.toBeInTheDocument();
  expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  expect(screen.queryByText(options[3])).not.toBeInTheDocument();
  });

  // Quero que o dropdown mostre as opções de menu quando for clicado
  it('should show options when open', () => {
    render(
    <Dropdown 
      title={title}
      options={options}
      onSelect={() => {}}
    />
  );

  expect(screen.queryByText(options[0])).not.toBeInTheDocument();
  expect(screen.queryByText(options[1])).not.toBeInTheDocument();
  expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  expect(screen.queryByText(options[3])).not.toBeInTheDocument();

  const dropdownButton = screen.getByRole('button', { name : title });

  userEvent.click(dropdownButton);

  expect(screen.getByRole('menuitem', {name: options[0]})).toBeInTheDocument();
  expect(screen.getByRole('menuitem', {name: options[1]})).toBeInTheDocument();
  expect(screen.getByRole('menuitem', {name: options[2]})).toBeInTheDocument();
  expect(screen.getByRole('menuitem', {name: options[3]})).toBeInTheDocument();
  });


  // Quando seelecionar um item do menu, fechar o sropdown e indicar qual opção foi selecionada
  it('should signal an option was selected and close the dropdown', () => {
    const  onSelect = jest.fn();
    render(
    <Dropdown 
      title={title}
      options={options}
      onSelect={onSelect}
    />
  );

  const dropdownButton = screen.getByRole('button', { name : title });

  userEvent.click(dropdownButton);
  const option0 = screen.getByRole('menuitem', {name: options[0]});
  const option1 = screen.getByRole('menuitem', {name: options[1]});
  const option2 = screen.getByRole('menuitem', {name: options[2]});
  const option3 = screen.getByRole('menuitem', {name: options[3]});
  
  expect(option0).toBeInTheDocument();
  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
  expect(option3).toBeInTheDocument();
  

  userEvent.click(option1);

  expect(onSelect).toHaveBeenCalledWith(options[1]);

  expect(screen.queryByText(options[0])).not.toBeInTheDocument();
  expect(screen.queryByText(options[1])).not.toBeInTheDocument();
  expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  expect(screen.queryByText(options[3])).not.toBeInTheDocument();

  });

})