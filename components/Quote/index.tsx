import { Blockquote } from '@mantine/core';
import { useEffect, useState } from 'react';
import fetchQuote from '../../utils/fetchQuote';
interface Quote {
	quote: string;
	author: string;
}

export default function Quote() {
	const [quote, setQuote] = useState<Quote>();

	useEffect(() => {
		fetchQuote().then((response) => {
			const { author, quote } = response.data;
			setQuote({ quote, author });
		});
	}, []);
	return <Blockquote cite={`- ${quote?.author}`}>{quote?.quote}</Blockquote>;
}
