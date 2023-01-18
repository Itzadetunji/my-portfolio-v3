import { FormEvent, useEffect, useState } from "react";
import { Navbar, Footer, SocialLinks, SectionTitle, SideSocialLinks } from "../components";
import type { NextPage } from "next";
import Image from "next/image";

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

	const handleContactFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
			<section className="flex flex-col items-center px-5 sm:px-[50px] xl:px-[85px] mt-10">
				<div className="flex flex-col xl:flex-row justify-between space-y-12 xl:space-y-0 xl:space-x-24 w-full max-w-[1275px]">
					<div className="flex flex-col space-y-12 flex-1">
						<SectionTitle text="Let's chat" />
						<form
							action=""
							onSubmit={(e) => handleContactFormSubmit(e)}
							className="flex flex-col space-y-10 text-white"
						>
							<div className="flex space-x-5 justify-between">
								<FormInput
									placeholder={"Enter Name"}
									value={formData.name}
									onChange={(e) => {
										setFormData({
											...formData,
											name: e.target.value,
										});
									}}
								/>
								<FormInput
									placeholder={"Enter Email Address"}
									value={formData.email}
									onChange={(e) => {
										setFormData({
											...formData,
											email: e.target.value,
										});
									}}
								/>
							</div>
							<div className="flex">
								<FormInput
									placeholder={"Enter subject of message"}
									value={formData.subject}
									onChange={(e) => {
										setFormData({
											...formData,
											subject: e.target.value,
										});
									}}
								/>
							</div>
							<div className="flex">
								<textarea
									className="h-44 bg-gray rounded-md flex flex-1 px-5 pt-5 pb-5 outline-none resize-none"
									placeholder="Enter message content"
									value={formData.body}
									onChange={(e) => {
										setFormData({
											...formData,
											body: e.target.value,
										});
									}}
								></textarea>
							</div>
							<button
								type="submit"
								className="bg-gray h-11 rounded-md px-6 py-3 w-fit flex items-center justify-between space-x-2 self-center"
							>
								<p>Send</p>
								<div className="relative w-[14px] h-[14px]">
									<Image
										src={"/icons/send.svg"}
										alt="Arrow Icon"
										layout="fill"
										objectFit="cover"
										className="rounded"
									/>
								</div>
							</button>
						</form>
					</div>
					<div className="self-center">
						<SideSocialLinks className={""} />
					</div>
				</div>
			</section>
		</>
	);
};
export default Contact;

const FormInput: NextPage<FormInputProps> = ({ placeholder, value, onChange }) => {
	return (
		<>
			<input
				className="h-[60px] bg-gray rounded-md flex flex-1 px-5 outline-none"
				onChange={(e) => onChange(e)}
				placeholder={placeholder}
				required
				value={value}
			/>
		</>
	);
};
