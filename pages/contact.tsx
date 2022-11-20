import { useState } from "react";
import { Navbar, Footer, SocialLinks } from "../components";

const Contact = () => {
	// const [contactFormData, setContactFormData] = useState({
	// 	name: "",
	// 	email: "",
	// 	subject: "",
	// 	message: "",
	// });
	// const [formState, setFormState] = useState({
	// 	submitted: false,
	// 	success: false,
	// 	message: null,
	// });

	// const handleContactFormSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const response = await fetch("/api/contact", {
	// 			method: "POST",
	// 			headers: {
	// 				Accept: "application/json, text/plain, */*",
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify(contactFormData),
	// 		});

	// 		if (response.status === 200) {
	// 			setFormState({ submitted: true, success: true });
	// 			setContactFormData({
	// 				name: "",
	// 				email: "",
	// 				subject: "",
	// 				message: "",
	// 			});
	// 			window.alert("Message sent!");
	// 		}
	// 	} catch (error) {
	// 		window.alert("Error Sending Message 😢. Try again 🤕.");
	// 		setFormState({
	// 			submitted: true,
	// 			success: false,
	// 			message: error.message,
	// 		});
	// 	}
	// };
	return <></>;
};
export default Contact;
