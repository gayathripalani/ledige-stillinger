import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Menu from "../Components/Menu";

describe("Menu", ()=>{
	beforeEach(()=>{})

	afterEach(cleanup)

	it("should render component",()=>{
		const {getByTestId} = render(<Menu/>)
		expect(getByTestId('menu-bar')).toBeInTheDocument
	})

	it("",()=>{})

})