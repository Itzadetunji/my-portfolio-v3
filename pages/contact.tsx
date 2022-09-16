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
			<div className="px-8 text-white max-w-[1440px] mx-auto">
				<p className="sectionTitle">Let&apos;s Chat</p>
				<div className="mt-14 flex flex-col flex-1 md:flex-row space-y-6 md:space-y-0 md:justify-between md:space-x-10">
					<div className="flex flex-col space-y-6 flex-grow">
						<input
							type="text"
							className="w-full box-border pl-6 py-7 bg-gray rounded-md outline-none text-white placeholder:text-white"
							placeholder="What is your name?"
							maxLength={25}
						/>
						<input
							type="text"
							className="w-full box-border pl-6 py-7 bg-gray rounded-md outline-none text-white placeholder:text-white"
							placeholder="Why are you sending this?"
							maxLength={50}
						/>
						<input
							type="text"
							className="w-full box-border pl-6 py-7 bg-gray rounded-md outline-none text-white placeholder:text-white"
							placeholder="What’s your email?"
							maxLength={50}
						/>
					</div>
					<div className="flex flex-col space-y-6 flex-grow">
						<textarea
							name=""
							className="w-full bg-gray box-border px-6 py-7 min-h-[184px] rounded-md resize-none text-white placeholder:text-white outline-none"
							placeholder="What do you want to talk about?"
						></textarea>
						<input
							type="submit"
							id="submit"
							className="mx-auto md:mx-0 custom-shadow rounded-md text-center bg-gray w-44 h-20 duration-500 ease-in-out cursor-pointer"
							value="Send Message"
						/>
					</div>
					<div className="mt-20 hidden md:block">
						<SocialLinks />
					</div>
				</div>
			</div>
			<div className="md:fixed md:bottom-0 md:right-1/2 md:translate-x-1/2">
				<Footer />
			</div>
		</>
	);
};
export default Contact;
