import { ErrorMessage, Field, Form, Formik } from "formik"
import s from "./ContactForm.module.css"
// import { nanoid } from "nanoid"
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

const ContactForm = () => {

	const dispatch = useDispatch();

	const initialValues = {
		name: "",
		number: "",
	}

	const handleSubmit = (values, actions) => {
		const newContact = {
			// Додаємо ідентифікатор в об'єкт нового контакту задопомогою nanoid (вбулований в Redux Toolkit )
			id: nanoid(),
			name: values.name,
			number: values.number,
		}
		dispatch(addContact(newContact));
		actions.resetForm();
	}

	const contactSchema = Yup.object().shape({
		name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
		number: Yup.string().matches(/^[0-9\s-().+]*$/, "Only numbers and allowed symbols are permitted").min(3, "Too Short!").max(50, "Too Long!").required("Required"),
	});

	return (
		<div>
			<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
				<Form className={s.form}>
					<label className={s.label}>
						<span>Name</span>
						<Field className={s.field} type="text" name="name" />
						<ErrorMessage className={s.error} name="name" component="span" />
					</label>
					<label className={s.label}>
						<span>Nubmer</span>
						<Field className={s.field} type="text" name="number" />
						<ErrorMessage className={s.error} name="number" component="span" />
					</label>
					<button className={s.btn} type="submit">Add contact</button>
				</Form>
			</Formik>
		</div>
	)
}

export default ContactForm
