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
	TEXTS_HOME,
	TITLES_HOME
} from '../../constants/data-home';
import { HomeCompanies, HomeImageMobile, HomeSection } from './styles';

const Home = () => {
	return (
		<>
			<HomeSection>
				<BgPattern />
				<HomeImageMobile src='/images/home/desktop/illustration-phone-mockup.svg' />
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
			</HomeSection>
		</>
	);
};

export default Home;
