import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Home from "../component/Home";
import {MemoryRouter} from "react-router";

describe("Home", () => {
    beforeEach(() => {
    })
    afterEach(cleanup)

    it("should render component with no data", () => {
        const {getByText} = render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>)
        expect(getByText('No Data available')).toBeInTheDocument
    })

})