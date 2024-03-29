import React from 'react';
import {cleanup, render} from '@testing-library/react';
import JobVacancyList from "../component/JobVacancyList";
import {ad, ad_with_missing_data} from "../common/Constants";

describe("JobVacancyList", () => {

    afterEach(cleanup)

    it("should render component", () => {
        const {getByTestId} = render(<JobVacancyList ad={ad}/>)
        expect(getByTestId('ad-item')).toBeInTheDocument()
    })

    it("should contain date,subject and description", () => {
        const {getByTestId, queryByText} = render(<JobVacancyList ad={ad}/>)

        expect(getByTestId('adDate')).toBeInTheDocument()
        expect(getByTestId('adJobTitle')).toBeInTheDocument()
        expect(getByTestId('adTitle')).toBeInTheDocument()

        expect(getByTestId('adDate')).toHaveTextContent('25.01.2020')
        expect(getByTestId('adJobTitle')).toHaveTextContent('Trainee Electrical Engineering')
        expect(getByTestId('adTitle')).toHaveTextContent('Ledig Trainee-stilling for 2020/2021 - Trainee Electrical Engineering')
    })

    it("should show default for title and jobtitle when empty", () => {
        const {getByTestId} = render(<JobVacancyList ad={ad_with_missing_data}/>)

        expect(getByTestId('adDate')).toHaveTextContent('25.01.2020')
        expect(getByTestId('adJobTitle')).toHaveTextContent('-')
        expect(getByTestId('adTitle')).toHaveTextContent('-')
    })
})