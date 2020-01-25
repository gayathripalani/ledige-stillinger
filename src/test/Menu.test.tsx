import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Menu from "../Components/Menu";
import {MemoryRouter} from "react-router";

describe("Menu", () => {
    beforeEach(() => {
    })

    afterEach(cleanup)

    it("should render component", () => {
        const {getByTestId} = render(
            <MemoryRouter>
                <Menu/>
            </MemoryRouter>)
        expect(getByTestId('menu-bar')).toBeInTheDocument
    })

})