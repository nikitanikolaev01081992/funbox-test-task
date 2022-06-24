import './styles.css';
import { Card, ICardProps } from '../Card/Card';

// =======================================================================

const cardsInfo: Array<ICardProps> = [
	{
		productId: 1,
		description: 'Печень утки разварная с артишоками.',
		name: 'Нямушка',
		taste: 'c фуа-гра',
		additionalMessages: ['10 порций', 'мышь в подарок'],
		weightData: { value: '0,5', units: 'кг' },
		isDisabled: false,
	},
	{
		productId: 2,
		description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
		name: 'Нямушка',
		taste: 'с рыбой',
		additionalMessages: ['40 порций', '2 мыши в подарок'],
		weightData: { value: '2', units: 'кг' },
		isDisabled: false,
	},
	{
		productId: 3,
		description: 'Филе из цыплят с трюфелями в бульоне.',
		name: 'Нямушка',
		taste: 'с курой',
		additionalMessages: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
		weightData: { value: '5', units: 'кг' },
		isDisabled: false,
	},
];

// =======================================================================
function Main() {
	return (
		<section className='main-container'>
			<div className='main-container__content'>
				<p className='main-container__slogan'>Ты сегодня покормил кота?</p>
				<ul className='main-container__products'>
					{cardsInfo.map((info) => (
						<li className='main-container__card' key={info.productId}>
							<Card {...info}></Card>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

// =======================================================================
export default Main;
