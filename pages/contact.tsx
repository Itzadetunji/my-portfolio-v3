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
	return (
		<>
			<Navbar />
			<div className="mx-8">
				<div>
					<div className="flex space-y-10">
						<input
							type="text"
							className="w-full box-border pl-6 py-4 bg-gray rounded-full outline-none text-white text-xl placeholder:text-white placeholder:text-xl"
							placeholder="What is your name?"
							maxLength={25}
						/>
						<input
							type="text"
							className="w-full box-border pl-6 py-4 bg-gray rounded-full outline-none text-white text-xl placeholder:text-white placeholder:text-xl"
							placeholder="Why are you sending this?"
							maxLength={50}
						/>
						<input
							type="text"
							className="w-full box-border pl-6 py-4 bg-gray rounded-full outline-none text-white text-xl placeholder:text-white placeholder:text-xl"
							placeholder="What’s your email?"
							maxLength={50}
						/>
					</div>
				</div>
				<div>
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
			</div>
			<div className="mt-20">
				<SocialLinks />
			</div>
			<Footer />
		</>
	);
};
export default Contact;
