import React from 'react';
import {cleanup, render} from '@testing-library/react';
import SavedScreen from "../Components/SavedScreen";

describe("SavedScreenTest", ()=>{
	beforeEach(()=>{})
	afterEach(cleanup)

	it("should render component",()=>{
		const {getByTestId} = render(<SavedScreen/>)
		expect(getByTestId('savedScreen')).toBeInTheDocument
	})

	it("",()=>{})

})