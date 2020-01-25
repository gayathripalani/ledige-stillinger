import React from 'react';
import {cleanup, render} from '@testing-library/react';
import SavedScreen from "../component/SavedScreen";

describe("SavedScreenTest", () => {
    beforeEach(() => {
    })
    afterEach(cleanup)

    it("should render component with no data passed", () => {
        const {getByText} = render(<SavedScreen/>)
        expect(getByText('No Saved Ads')).toBeInTheDocument
    })

})