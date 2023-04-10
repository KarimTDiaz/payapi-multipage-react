import { v4 } from 'uuid';

export const TITLES_HOME = {
	header: 'Start building with our APIs for absolutely free.',
	socials: 'Who we work with',
	implement: 'Easy to implement',
	ux: 'Simple UI & UX',
	start: 'Ready to start?'
};

export const TEXTS_HOME = {
	button: 'Have any questions?',
	socials:
		'Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. ',
	implement:
		'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.',
	ux: 'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. '
};

export const COMPANIES_HOME = [
	{
		src: 'images/shared/desktop/tesla.svg',
		alt: 'Logo Tesla',
		id: v4()
	},
	{
		src: 'images/shared/desktop/microsoft.svg',
		alt: 'Logo Microsoft',
		id: v4()
	},
	{
		src: 'images/shared/desktop/hewlett-packard.svg',
		alt: 'Logo Hewlett',
		id: v4()
	},
	{
		src: 'images/shared/desktop/oracle.svg',
		alt: 'Logo Oracle',
		id: v4()
	},
	{
		src: 'images/shared/desktop/google.svg',
		alt: 'Logo Google',
		id: v4()
	},
	{
		src: 'images/shared/desktop/nvidia.svg',
		alt: 'Logo Nvidia',
		id: v4()
	}
];

export const SERVICES_HOME = [
	{
		src: 'images/home/desktop/icon-personal-finances.svg',
		alt: 'Icono Finanzas',
		title: 'Personal Finances',
		info: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ',
		id: v4()
	},
	{
		src: 'images/home/desktop/icon-banking-and-coverage.svg',
		alt: 'Icono Banco',
		title: 'Banking & Coverage',
		info: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
		id: v4()
	},
	{
		src: 'images/home/desktop/icon-consumer-payments.svg',
		alt: 'Icono Tarjeta',
		title: 'Consumer Payments',
		info: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
		id: v4()
	}
];
