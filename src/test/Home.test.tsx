import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Home from "../Components/Home";

describe("Home", ()=>{
	beforeEach(()=>{})
	afterEach(cleanup)

	it("should render component",()=>{
		const {getByTestId} = render(<Home/>)
		expect(getByTestId('')).toBeInTheDocument
	})



})