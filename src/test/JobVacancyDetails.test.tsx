import React from 'react';
import {cleanup, queryByText, render} from '@testing-library/react';
import JobVacancyDetails from "../component/JobVacancyDetails";
import {MemoryRouter, Route} from "react-router";
import {ad} from "../common/Constants";

describe("JobVacancyDetails", () => {
    afterEach(cleanup)

    const renderComponent = (id: string) => render(
        <MemoryRouter initialEntries={[{
            pathname: `/ads/${id}`,
            state: { ad: ad }
        }]}>
            <JobVacancyDetails/>
        </MemoryRouter>
    )

        it("should render component",()=>{
            const {getByTestId, queryByText} = renderComponent("952fb47b-6143-4394-9d50-a3f59b4ca3e3");
            expect(getByTestId('detailPage')).toBeInTheDocument
            expect(queryByText('We need ambitious individuals who can strengthen our team and support our plans within a number of projects')).toBeInTheDocument
            expect(queryByText('974220954')).toBeInTheDocument
            expect(queryByText('https://www.akersolutions.com')).toBeInTheDocument
            expect(queryByText('2020-02-03T11:00:00.000Z')).toBeInTheDocument

        })
})