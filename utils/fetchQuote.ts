export default async function fetchQuote() {
	return await fetch('https://api.themotivate365.com/stoic-quote')
		.then((response) => response.json())
		.catch((error) => error);
}
