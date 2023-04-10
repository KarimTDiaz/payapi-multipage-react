import { Link } from 'react-router-dom';
import BgPattern from '../../components/bg-pattern/BgPattern';
import Button from '../../components/button/Button';
import IconCompany from '../../components/icon-company/IconCompany';
import InputEmail from '../../components/input-email/InputEmail';
import MainTitle from '../../components/main-title/MainTitle';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { BUTTONS } from '../../constants/buttons';
import {
	COMPANIES_HOME,
	SERVICES_HOME,
	TEXTS_HOME,
	TITLES_HOME
} from '../../constants/data-home';
import {
	HomeCompanies,
	HomeImageCoding,
	HomeImageMobile,
	HomeImageTwoMobiles,
	HomeSection,
	HomeServicesList,
	ServicesIcon,
	ServicesItem,
	ServicesTitle
} from './styles';

const Home = () => {
	return (
		<>
			<HomeSection head>
				<BgPattern />
				<HomeImageMobile
					src='/images/home/desktop/illustration-phone-mockup.svg'
					alt='Imagen de movil'
				/>
				<div>
					<MainTitle>{TITLES_HOME.header}</MainTitle>
					<InputEmail />
					<Button type={BUTTONS.PRIMARY}>Schedule a Demo</Button>
					<Text>
						{TEXTS_HOME.button}
						<Link to={'/contact'}> Contact Us</Link>
					</Text>
				</div>
			</HomeSection>
			<HomeSection dark>
				<HomeCompanies>
					{COMPANIES_HOME.map(company => (
						<IconCompany key={company.id} data={company} />
					))}
				</HomeCompanies>
				<Title>{TITLES_HOME.socials}</Title>
				<Text>{TEXTS_HOME.socials}</Text>
				<Button type={BUTTONS.SECONDARY}>About Us</Button>
			</HomeSection>
			<HomeSection>
				<HomeImageCoding
					src='/images/home/desktop/illustration-easy-to-implement.svg'
					alt='Imagen de Código'
				/>
				<Title dark>{TITLES_HOME.implement}</Title>
				<Text dark>{TEXTS_HOME.implement}</Text>
			</HomeSection>
			<HomeSection head>
				<HomeImageTwoMobiles src='/images/home/desktop/illustration-simple-ui.svg' />
				<Title dark>{TITLES_HOME.ux}</Title>
				<Text dark>{TEXTS_HOME.ux}</Text>
				<HomeServicesList>
					{SERVICES_HOME.map(item => (
						<ServicesItem key={item.id}>
							<ServicesIcon src={item.src} alt={item.alt} />
							<ServicesTitle>{item.title}</ServicesTitle>
							<Text dark>{item.info}</Text>
						</ServicesItem>
					))}
				</HomeServicesList>
			</HomeSection>
			<HomeSection>
				<Title dark>{TITLES_HOME.start}</Title>
				<InputEmail />
				<Button>Schedule a Demo</Button>
			</HomeSection>
		</>
	);
};

export default Home;
