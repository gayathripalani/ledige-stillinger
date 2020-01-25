import React from 'react';
import {cleanup, render} from '@testing-library/react';
import App from "../Components/App";

describe("App", () => {
    afterEach(cleanup)

    it("should render component", () => {
        const {getByTestId} = render(<App/>)
        expect(getByTestId('app_container')).toBeInTheDocument()
    })
})