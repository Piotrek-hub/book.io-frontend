import { Blockquote } from '@mantine/core';
import { useEffect, useState } from 'react';
import fetchQuote from '../../utils/fetchQuote';
interface Quote {
	content: string;
	author: string;
}

export default function Quote() {
	const [quote, setQuote] = useState<Quote>();

	useEffect(() => {
		fetchQuote().then((response) => {
			console.log(response)
			const { author, content } = response;
			setQuote({ content, author });
		});
	}, []);
	return <Blockquote cite={`- ${quote?.author}`}>{quote?.content}</Blockquote>;
}
