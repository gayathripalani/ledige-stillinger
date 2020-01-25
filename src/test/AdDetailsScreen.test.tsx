import React from 'react';
import {cleanup, render} from '@testing-library/react';
import AdDetailsScreen from "../Components/AdDetailsScreen";
import {MemoryRouter, Route} from "react-router";
import {ad} from "../Components/Constants";

describe("AdDetailScreen", ()=>{
	beforeEach(()=>{
		localStorage.setItem("saveAd", "[{\"uuid\":\"e32285cd-6400-4004-ae8f-987ca191fbb4\",\"published\":\"2020-01-25T08:09:49.783759Z\",\"expires\":\"2020-02-03T10:00:00Z\",\"updated\":\"2020-01-25T08:10:33.152222Z\",\"workLocations\":[{\"country\":\"NORGE\",\"address\":null,\"city\":null,\"postalCode\":null,\"county\":\"VESTLAND\",\"municipal\":\"BERGEN\"}],\"title\":\"Ledig Trainee-stilling for 2020/2021 - Trainee Technical Safety \",\"description\":\"<p>We need ambitious individuals who can strengthen our team and support our plans within a number of projects.</p><p>We are looking for people working in the Engineering group within Technical safety</p><p><strong>Responsibility and task</strong>s:</p><p>The Safety, Working Environment and Environment Engineer need to carry out activities related to firewater design, working environment issues associated within the modification scope. The objective is to develop a design and layout that ensure a physical working environment which is in line with requirements and Client policies. Regarding environmental engineering the work will be to identify environmental aspects, evaluation of the impact on emission, discharges and waste handling. Perform environmental budget including discharge to sea, emission to air and chemical consumption based on production profiles etc. Performing BAT evaluations as a part of the environmental part of the scope. To achieve that, the discipline will work proactively towards other disciplines, and the main focus areas/responsibilities are regarded to be;  </p><p>Review firewater capacity, and specify firewater demand  </p><p>Working Environment and Health Risk Assessment (WEHRA)</p><p>Establish WEAC and specify WEAL</p><p>Human factors (HF) analyses</p><p>Environmental assessment, evaluations and calculations</p><p><strong>Our ideal candidate/ qualifications:</strong></p><p>A recent Master graduate in technical education</p><p>High interests in new technologies / systems</p><p>Interested in method and working processes applied in multidiscipline project work.</p><p>Comfortable working with Excel and other web-based tools</p><p>Comfortable with Norwegian and English as a working language</p><p>A proactive problem solver with the right attitude and strategic thinking</p><p>Interested in learning about project execution in the energy industry</p><p>Reliable and work well with people and teams</p><p><strong>Personal qualities:</strong></p><p>Engaged, dedicated, inclusive and solution-oriented</p><p>Comfortable working both in a team and independently</p><p>Committed to deliver high quality result</p><p>Cooperation-oriented with good execution ability</p><p>Ability to understand the consequences of changing customer needs and the capabilities of new technology.</p><p>Willingness to use new digital solutions</p><p>Ability to work quickly, systematically and with great accuracy</p><p><strong>We can offer:</strong></p><p>Competitive compensation and benefits</p><p>Good work/life balance</p><p>Positive work environment with challenging tasks</p><p>Development opportunities</p><p> </p><p><strong>Informasjon fra Bergen Næringsråd, Trainee Vest</strong></p><p>www.bergen-chamber.no</p>\",\"sourceurl\":null,\"source\":\"DIR\",\"applicationDue\":\"2020-02-03T11:00:00.000Z\",\"occupationCategories\":[{\"level1\":\"IT\",\"level2\":\"Utvikling\"}],\"jobtitle\":\"Trainee Technical Safety \",\"link\":\"https://arbeidsplassen.nav.no/stillinger/stilling/e32285cd-6400-4004-ae8f-987ca191fbb4\",\"employer\":{\"name\":\"Aker Solutions AS\",\"orgnr\":\"974220954\",\"description\":\"<p>Our Vision</p><p>A leader in forging a sustainable future for our industry and the world it serves.</p><p></p><p>Who we are:</p><p>Building on more than 175 years of technological and engineering excellence Aker Solutions is at the forefront in forging a sustainable future for the global energy industry and the world it serves. A spirit of collaboration and openness is at the heart of this effort as we set new standards and solve new challenges.</p><p>We trace our origins back to a small mechanical workshop founded on the Aker River in Oslo more than 170 years ago. Today we are present in over 20 countries across the world. This means our brand is more than just a name and logo. It is a promise of sustained excellence and innovation that has spanned almost two centuries. It projects who we are and what we stand for to the world around us.</p><p>Norway is Aker Solutions&#39; biggest region in terms of employees and revenue. All Aker Solutions business areas operate in Norway. Aker Solutions in Bergen, located at Sandsli, has an integral role in the Norwegian industrial history and development. Key delivery center located in Bergen today is Projects (brownfield), Front End and Services (AIM), including support functions.</p><p>There are approximately 600 collegues working in different areas mainly in larger projects. Aker Solutions based in Bergen, provides engineering and project management services to the upstream oil and gas industry.</p>\",\"homepage\":\"https://www-akersolutions.com\"},\"engagementtype\":\"Trainee\",\"extent\":\"Heltid\",\"starttime\":\"Etter avtale\",\"positioncount\":\"1\",\"sector\":\"Privat\"}]")
	})
	afterEach(cleanup)

	const renderComponent = (id:string) => render(
		<MemoryRouter initialEntries={ [{
			pathname:`/ads/${id}`,
			state: ad
		}]}>
			<AdDetailsScreen/>
		</MemoryRouter>

	)
/*

	it("should render component",()=>{
		const {getByTestId} = renderComponent("e32285cd-6400-4004-ae8f-987ca191fbb4");
		expect(getByTestId('detailPage')).toBeInTheDocument
	})
*/


})