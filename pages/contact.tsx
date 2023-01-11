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
	const [name, setName] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [body, setBody] = useState<string>("");
	// useEffect(() => {
	// 	setFormData(() => ({
	// 		name,
	// 		subject,
	// 		email,
	// 		body,
	// 	}));
	// }, [name, subject, email, body]);

	return (
		<>
			<div className="mt-10">
				<SectionTitle text="Let's chat" />
				<form
					action=""
					onSubmit={(e) => {
						e.preventDefault();
						console.log(formData);
					}}
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
				// onKeyDown={() => console.log(value)}
			/>
		</>
	);
};
