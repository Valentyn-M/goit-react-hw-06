import { createSlice } from "@reduxjs/toolkit"

// Початковий стан редюсера слайсу
const initialState = {
	items: [
		{
			"id": "id-1",
			"name": "Rosie Simpson",
			"number": "459-12-56"
		},
		{
			"id": "id-2",
			"name": "Hermione Kline",
			"number": "443-89-12"
		},
		{
			"id": "id-3",
			"name": "Eden Clements",
			"number": "645-17-79"
		},
		{
			"id": "id-4",
			"name": "Annie Copeland",
			"number": "227-91-26"
		},
		{
			"id": "id-5",
			"name": "Oliver Smith",
			"number": "512-34-78"
		},
		{
			"id": "id-6",
			"name": "Sophia Johnson",
			"number": "890-45-23"
		},
		{
			"id": "id-7",
			"name": "Liam Brown",
			"number": "678-23-91"
		},
		{
			"id": "id-8",
			"name": "Emma Davis",
			"number": "234-56-78"
		},
		{
			"id": "id-9",
			"name": "James Wilson",
			"number": "987-65-43"
		}
	]
}

const slice = createSlice({
	// Ім'я слайсу (Властивість name визначає ім'я слайсу, яке додаватиметься як приставка під час створення екшенів, оголошених у властивості reducers.)
	name: "contacts",
	// Початковий стан редюсера слайсу
	initialState,
	// Об'єкт case-редюсерів (Кожен case-редюсер відповідає за один конкретний екшен і змінює стан)
	// У властивості reducers оголошуються case-редюсери - функції, які визначають, як змінювати стан слайсу у відповідь на певний екшен (action). 
	reducers: {
		addContact: (state, action) => {
			state.items.push(action.payload);
		},
		deleteContact: (state, action) => {
			// Повертаємо новий масив відфільтрованих об'єктів, які задовольняють умові (item.id !== action.payload)
			state.items = state.items.filter(item => item.id !== action.payload);
		},
		editContactName: (state, action) => {
			const contact = state.items.find(item => item.id === action.payload.id);
			contact.name = action.payload.newName;
		},
		editContactNumber: (state, action) => {
			const contact = state.items.find(item => item.id === action.payload.id);
			contact.number = action.payload.newNumber;
		}
	}
});

// Функції-селектори для використання в useSelector
export const selectContacts = (state) => state.contacts.items; // Повертає список контактів з властивості items
// 1. state - загальний стан нашого додатка
// 2. contacts - ім'я слайсу
// 3. items - значення властивості items з initialState цього слайсу


// Експортуємо екшени
export const { addContact, deleteContact, editContactName, editContactNumber } = slice.actions;

// Експортуємо редюсер слайсу
// У властивість reducer зберігається редюсер слайсу який експортуємо із файла і передаємо при створенні стора.
export const contactsReducer = slice.reducer;

