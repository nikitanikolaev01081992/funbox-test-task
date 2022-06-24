import './styles.css';

// =======================================================================
interface IDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
	isSelected: boolean;
	isDisabled: boolean;
	description: string;
	taste: string;
	handleClick: () => void;
}

const DESCRIPTION_CLASS = 'description';

// =======================================================================
function Description(props: IDescriptionProps) {
	const { isSelected, isDisabled, description, taste, handleClick, className } = props;

	let content = (
		<>
			Чего сидишь? Порадуй котэ,
			<span className={`${DESCRIPTION_CLASS}__buy`} onClick={handleClick}>
				купи
			</span>
			{/* в макете точка тоже окрашена, однако нет подчёркивания, аяй */}
			<span className={`${DESCRIPTION_CLASS}__dot`} onClick={handleClick}>
				.
			</span>
		</>
	);

	if (isDisabled) {
		// плак плак =(
		content = <>Печалька, {taste} закончился.</>;
	} else if (isSelected) {
		content = <>{description}</>;
	}

	return (
		<p className={`${className} ${DESCRIPTION_CLASS} ${isDisabled ? `${DESCRIPTION_CLASS}_disabled` : ''}`}>
			{content}
		</p>
	);
}
// =======================================================================
export default Description;
