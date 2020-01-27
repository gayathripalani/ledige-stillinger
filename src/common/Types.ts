export interface AdProps {
	ad: Ad
}

export interface Ad {
	uuid: string;
	published: string;
	expires: string;
	updated: string;
	workLocations: WorkLocation[];
	title: string;
	description: string;
	sourceurl: Object;
	source: string;
	applicationDue: string;
	occupationCategories: OccupationCategories[];
	jobtitle: Object | null;
	link: string;
	employer: Employer;
	engagementtype: string;
	extent: string;
	starttime: string;
	positioncount: string;
	sector: string;
}

interface WorkLocation {
	country: string;
	address: string;
	city: string;
	postalCode: string;
	county: string;
	municipal: string;
}

interface Employer {
	name: string;
	orgnr: string;
	description: string;
	homepage: string | null;
}

interface OccupationCategories {
	level1: String;
	level2: String;
}