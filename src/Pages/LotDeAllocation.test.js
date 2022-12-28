import { fireEvent, render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import LotDeallocation from "./LotDeallocation"

describe('LotDeAllocation', ()=>{

    test('renders correctly', ()=>{
          render(<BrowserRouter><LotDeallocation></LotDeallocation> </BrowserRouter>)
        const heading = screen.getByText('Remove this Parked Car')
        expect(heading).toBeInTheDocument();
    })
})
