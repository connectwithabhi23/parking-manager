import ParkingLot from "./ParkingLot";
import {render,screen} from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe('ParkingLot', ()=>{

    test('renders correctly', ()=>{

        render(<BrowserRouter><ParkingLot></ParkingLot> </BrowserRouter>)
        const headingElement = screen.getByRole("heading",{level : 1})
        expect(headingElement).toBeInTheDocument()
    })

    test('renders allocate space button ', ()=>{

        render(<BrowserRouter><ParkingLot></ParkingLot> </BrowserRouter>)
        const buttonElement = screen.getByRole("button",{name : 'Allocate Space'})
        expect(buttonElement).toBeInTheDocument()
    })

    test('renders allocate space button ', ()=>{
       
        render(<BrowserRouter><ParkingLot></ParkingLot> </BrowserRouter>)
        const buttonElement = screen.getByRole("button",{name : 'Allocate Space'})
        expect(buttonElement).toBeInTheDocument()
    })


})

