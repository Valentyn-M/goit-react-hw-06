import s from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
	return (
		<div className={s.search}>
			<label className={s.label}>
				<span>Search by name</span>
				<input
					className={s.field} type="text" value={value} onChange={(evt) => onFilter(evt.target.value)}
				/>
			</label>
		</div>
	)
}

export default SearchBox
