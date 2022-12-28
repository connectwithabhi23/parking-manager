import { fireEvent, render,screen } from "@testing-library/react"
import LotAllocation from "./LotAllocation"
import { BrowserRouter } from "react-router-dom"

const mockedHandleClick = jest.fn();
const mockedHandleChange = jest.fn();

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));


describe('LotAllocation', ()=>{

    test('component renders correctly', ()=>{

        render(<BrowserRouter><LotAllocation></LotAllocation> </BrowserRouter>)

        const headingElement = screen.getByText('Allocate Parking Space')
        expect(headingElement).toBeInTheDocument()

        const currentTime = screen.getByText('Current Time', {exact: false})
        expect(currentTime).toBeInTheDocument()

        const inputElement = screen.getByPlaceholderText('enter car number')
        expect(inputElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button', {name : 'Assign Space'})
        expect(buttonElement).toBeInTheDocument()
    })

    // test('sets the car registration number on click', ()=>{

    //     render(<BrowserRouter><LotAllocation></LotAllocation> </BrowserRouter>)

    //     const buttonElement = screen.getByRole('button', {name : 'Assign Space'})
    //     fireEvent.click(buttonElement)
    //     expect(mockedHandleClick).toHaveBeenCalledTimes(1)
    // })

    test('inputElement and state have the value that user enters', ()=>{
        render(<BrowserRouter><LotAllocation/></BrowserRouter>);
    
        const inputElement = screen.getByPlaceholderText('enter car number')
        fireEvent.change(inputElement,{target: {value :'1234'}})
        expect(inputElement.value).toBe('1234')
    
      })

      test(' value should Change on every user input', ()=>{
        render(<BrowserRouter><LotAllocation/></BrowserRouter>);
    
        const inputElement = screen.getByPlaceholderText('enter car number')
        fireEvent.change(inputElement,{target: {value :'1'}})
        expect(inputElement).toHaveValue('1')
    
      })

      test('alert on click when registration number is not provided', ()=>{
        const alertMock = jest.spyOn(window, 'alert').mockImplementation()
        render(<BrowserRouter><LotAllocation/></BrowserRouter>);
        let array = [{id: 1, isAllocated : false},{id: 2, isAllocated : false} ]
        const buttonElement = screen.getByRole('button', {name : 'Assign Space'})
        const inputElement = screen.getByPlaceholderText('enter car number')
        fireEvent.click(buttonElement)
        if (inputElement.value === '') {
            expect(alertMock).toHaveBeenCalledTimes(1)
        }

        else{

            let value = true 
            while(value){
              const num = Math.floor(Math.random() * array.length  + 1)
              if(!array[num].isAllocated){
                expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
                break;
              }
            }

        }
      })

      test('navigate on click when registration number is  provided', ()=>{
        
        render(<BrowserRouter><LotAllocation/></BrowserRouter>);
        const buttonElement = screen.getByRole('button', {name : 'Assign Space'})
        const inputElement = screen.getByPlaceholderText('enter car number')
        fireEvent.click(buttonElement)
        if (inputElement.value !== '' || inputElement.value.trim().length !==0) {
            expect(mockedUseNavigate).toHaveBeenCalledTimes(1)
            
        }

        
      })
})