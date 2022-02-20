export default async function fetchQuote() {
	return await fetch('http://quotable.io/random')
		.then((response) => response.json())
		.catch((error) => error);
}
