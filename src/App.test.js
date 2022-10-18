import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
// import {logRoles} from '@testing-library/dom';

// test('button has correct initial color', () => {
//   render(<App/>);
//   const colorBtn = screen.getByRole('button', {name:'Change to blue'});
//   expect(colorBtn).toHaveStyle({backgroundColor:'red'})
//    fireEvent.click(colorBtn)
//    expect(colorBtn).toHaveStyle({backgroundColor:'blue'})
//    expect(colorBtn).toHaveTextContent('Change to red')
// });
// // test('button has correct initial test', ()=> {
// // render(<App/>)
// // })
test('initial condition', ()=> {
  render(<App/>)

  const colorBtn = screen.getByRole('button');
  expect(colorBtn).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked()
}
)
test( 'initial Condition', ()=> {
  render(<App/>);
  const btn = screen.getByRole('button');
  expect(btn).toBeEnabled()
})

test('Enable button when checkbox is unchecked and viceversa', () => {
   render(<App/>)
   const checkbox = screen.getByRole('checkbox');
   fireEvent.click(checkbox);
   const btn = screen.getByRole('button');
   expect(btn).toBeDisabled();
  //  const checkbox = screen.getByRole('checkbox');
   fireEvent.click(checkbox);
   expect(btn).toBeEnabled()
})