import { useEffect, useState } from "react";
import { Navbar, Footer, SocialLinks, SectionTitle } from "../components";
import type { NextPage } from "next";

interface FormInputProps {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Contact: NextPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		subject: "",
		email: "",
		body: "",
	});
	const [formState, setFormState] = useState<any>({
		submitted: false,
		success: false,
		message: null,
	});

	const handleContactFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.status === 200) {
				setFormState({ submitted: true, success: true });
				setFormData({
					name: "",
					email: "",
					subject: "",
					body: "",
				});
				window.alert("Message sent!");
			}
		} catch (error) {
			window.alert("Error Sending Message 😢. Try again 🤕.");
			setFormState({
				submitted: true,
				success: false,
				message: error.message,
			});
		}
	};
	return (
		<>
			<div className="mt-10">
				<SectionTitle text="Let's chat" />
				<form
					action=""
					onSubmit={handleContactFormSubmit}
				>
					<FormInput
						placeholder={"Test"}
						value={formData.name}
						onChange={(e) => {
							setFormData({
								...formData,
								name: e.target.value,
							});
						}}
					/>
					<FormInput
						placeholder={"Test"}
						value={formData.subject}
						onChange={(e) => {
							setFormData({
								...formData,
								subject: e.target.value,
							});
						}}
					/>
					<FormInput
						placeholder={"Test"}
						value={formData.email}
						onChange={(e) => {
							setFormData({
								...formData,
								email: e.target.value,
							});
						}}
					/>
					<FormInput
						placeholder={"Test"}
						value={formData.body}
						onChange={(e) => {
							setFormData({
								...formData,
								body: e.target.value,
							});
						}}
					/>
					<input
						type="submit"
						id="submit"
						className="bg-red-900"
					/>
				</form>
			</div>
		</>
	);
};
export default Contact;

const FormInput: NextPage<FormInputProps> = ({ placeholder, value, onChange }) => {
	return (
		<>
			<input
				className=""
				onChange={(e) => onChange(e)}
				placeholder={placeholder}
				required
				value={value}
			/>
		</>
	);
};
