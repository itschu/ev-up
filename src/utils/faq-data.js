export const Data = [
	{
		question: "What do you call a dog magician?",
		answer: "A labracadabrador.",
	},
	{
		question: "What do you call a funny mountain?",
		answer: "Hill-arious.",
	},
	{
		question: "What did the astronaut say when he crashed into the moon?",
		answer: "I Apollo-gize.",
	},
];

export const price = {
	classic: {
		type: "classic",
		monthly: 1950.0,
		weekly: 550.0,
	},

	premium: {
		type: "premium",
		monthly: 2350.0,
		weekly: 700.0,
	},
};

export const currencyFractionDigits = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
}).resolvedOptions().maximumFractionDigits;
