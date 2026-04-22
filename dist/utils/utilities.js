//#region src/lib/utils/utilities.ts
async function e(e) {
	let t = await fetch(e);
	if (!t.ok) throw console.error(`Error fetching data from ${e}:`, t.statusText), Error(`An error has occurred while fetching ${e}: ${t.status}`);
	let n = await t.json();
	return console.log(n), n;
}
//#endregion
export { e as fetcher };
