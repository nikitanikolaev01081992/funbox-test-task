import './styles.css';

import { useState } from 'react';
import Description from '../Description/Description';
import { IWeightData, Weight } from '../Weight/Weight';

// =======================================================================

interface ICardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	productId: number;
	description: string;
	name: string;
	taste: string;
	additionalMessages: Array<string>;
	weightData: IWeightData;
	isDisabled: boolean;
}

const HOVER_TIMEOUT_MS = 700; // milliseconds

// =======================================================================
function Card(props: ICardProps): JSX.Element {
	const { description, name, taste, additionalMessages, weightData, isDisabled } = props;
	const [isSelected, setSelectState] = useState(false);
	const [wasHovered, setHoveredState] = useState(false);

	const handleClick = () => {
		if (isDisabled) {
			return;
		}

		setSelectState(!isSelected);
	};

	// если честно, то мне не совсем понятно поведение наведения
	// как-то не вяжется с логикой выбора карточки
	// постарался сделать прям как в тех. задании
	const handleMouseLeave = () => {
		if (!isSelected) {
			return;
		}

		setTimeout(() => {
			setHoveredState(true);
		}, HOVER_TIMEOUT_MS);
	};

	const stateClass = isDisabled ? 'card_disabled' : isSelected ? 'card_selected' : '';
	return (
		<div className={`card ${stateClass}`} onMouseLeave={handleMouseLeave}>
			<div className='card__content-wrapper'>
				<div className='card__content' onClick={handleClick}>
					<p className='card__top-text'>{!wasHovered ? 'Сказочное заморское яство' : 'Котэ не одобряет?'}</p>
					<p className='card__name'>{name}</p>
					<p className='card__taste'>{taste}</p>
					<ul className='card__messages'>
						{additionalMessages.map((message) => (
							<li className='card__message' key={message}>
								{message}
							</li>
						))}
					</ul>
					<Weight className='card__weight' {...{ weightData, isDisabled, isSelected }}></Weight>
				</div>
			</div>

			<Description
				className='card__description'
				{...{ isDisabled, isSelected, description, taste, handleClick }}
			></Description>
		</div>
	);
}
// =======================================================================
export type { ICardProps };
export { Card };
