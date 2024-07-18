import { act, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "./mocks/mockResListData.json"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";



global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})
test("Should render the body component with search", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>

        )
    });

    let searchBtn = screen.getByRole("button", { name: "Search" });


    expect(searchBtn).toBeInTheDocument()
})