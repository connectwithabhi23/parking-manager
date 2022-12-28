import { render, screen,fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe('Home', ()=>{

  test('renders correctly', () => {
    render(<BrowserRouter><Home/></BrowserRouter>);

    const headingElement = screen.getByRole('heading',{level:3})
    expect(headingElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument()
  });

  test('inputElement and state have the value that user enters', ()=>{
    render(<BrowserRouter><Home/></BrowserRouter>);

    const inputElement = screen.getByPlaceholderText('enter the number of lots')
    fireEvent.change(inputElement,{target: {value :'5'}})
    expect(inputElement.value).toBe('5')



  })

  test('should alert when non-numeric value is provided',async()=>{
    const alertMock = jest.spyOn(window, 'alert').mockImplementation()
    render(<BrowserRouter><Home/></BrowserRouter>);
    const inputElement = screen.getByPlaceholderText('enter the number of lots')
    fireEvent.change(inputElement,{target: {value : 'r'}})
    expect(alertMock).toHaveBeenCalledTimes(1);
    
  })

  test('navigate to parking lot page on clicking', ()=>{
    const arr = []
    render(<BrowserRouter><Home></Home> </BrowserRouter>)
    const createLotButton = screen.getByRole('button',{name :'Create Parking Lots'})
    fireEvent.click(createLotButton)
    const inputElement = screen.getByPlaceholderText('enter the number of lots')
    expect(arr.length=== Number(inputElement.value))
    expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
  })
})


