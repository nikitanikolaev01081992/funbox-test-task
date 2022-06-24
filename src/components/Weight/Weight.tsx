import './styles.css';

// =======================================================================
interface IWeightData {
	value: string;
	units: string;
}

interface IWeightProps extends React.HTMLAttributes<HTMLDivElement> {
	weightData: IWeightData;
	// сделано для того, чтобы в стилях карточки не влиять на внутренние стили веса
	isDisabled: boolean;
	isSelected: boolean;
}
// =======================================================================
function Weight({ weightData, isDisabled, isSelected, className }: IWeightProps) {
	const statusClass = isDisabled ? 'weight_disabled' : isSelected ? 'weight_selected' : '';

	return (
		<div className={`${className} weight ${statusClass}`}>
			<p className='weight__value'>{weightData.value}</p>
			<p className='weight__units'>{weightData.units}</p>
		</div>
	);
}
// =======================================================================
export type { IWeightData };
export { Weight };
