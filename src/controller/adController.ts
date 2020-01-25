const getAd = (page: string) => {

	let ads = fetch(
		`https://arbeidsplassen.nav.no/public-feed/api/v1/ads?size=10&page=${page}`,
		{
			method: "GET",
			headers: {
				Authorization:
					"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ"
			}
		}
	)
		.then(res => res.json())
		.then(res => res)
		.catch(err => {
			console.log(err);
			throw err;
});
	console.log(ads);
	console.log(typeof ads);

	return ads;


};



export default getAd;
