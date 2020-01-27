import React from 'react';
import {cleanup, render} from '@testing-library/react';
import SavedJobs from "../component/SavedJobs";

describe("SavedJobTest", () => {
    beforeEach(() => {
    })
    afterEach(cleanup)

    it("should render component with no data passed", () => {
        const {getByText} = render(<SavedJobs/>)
        expect(getByText('No Saved Ads')).toBeInTheDocument
    })

})