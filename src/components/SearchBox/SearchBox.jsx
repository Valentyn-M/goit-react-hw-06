import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {

	// Отримуємо початкове значення зі стора
	const filterValue = useSelector(selectNameFilter);

	const dispatch = useDispatch();

	return (
		<div className={s.search}>
			<label className={s.label}>
				<span>Search by name</span>
				<input
					className={s.field}
					type="text"
					value={filterValue}
					onChange={(evt) => dispatch(changeFilter(evt.target.value))}
				/>
			</label>
		</div>
	)
}

export default SearchBox
