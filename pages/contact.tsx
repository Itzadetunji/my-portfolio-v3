import { Dispatch, SetStateAction, FormEvent, useEffect, useState } from "react";
import { Navbar, Footer, SocialLinks, SectionTitle, SideSocialLinks } from "../components";
import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

interface FormInputProps {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SuccessMessageProps {
	setIsModalShowing: Dispatch<SetStateAction<boolean>>;
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

	const [isModalSHowing, setIsModalShowing] = useState<boolean>(false);

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
			{isModalSHowing && <SuccessMessage setIsModalShowing={() => setIsModalShowing(!isModalSHowing)} />}
			<button onClick={() => setIsModalShowing(true)}>dqed</button>
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

const SuccessMessage: NextPage<SuccessMessageProps> = ({ setIsModalShowing }) => {
	return (
		<>
			<div className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-50 flex flex-col items-center justify-center bg-black bg-opacity-50 w-full h-full">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2 }}
					className="relative bg-white rounded-md w-fit max-w-[701px] mx-6 h-fit"
				>
					<img
						src="../icons/thank-you.svg"
						className="w-full pr-7 sm:pr-12"
						alt=""
					/>
					<img
						src="/icons/send.svg"
						className="absolute top-[10px] sm:top-6 right-[10px] sm:right-9 w-[18px] sm:w-[30px] h-[18px] sm:h-[30px] cursor-pointer"
						alt=""
						onClick={() => {
							setIsModalShowing(false);
						}}
					/>
					<div className="pt-5 sm:pt-10 pb-7 sm:pb-14 px-3.5 sm:px-9">
						<p className="text-eccblue text-center text-[15px] sm:text-[32px]">Message Sent!</p>
						<p className="text-[#434343] mt-5 text-center text-xs sm:text-lg">Your message has been sent 😊 </p>
						<p className="text-[#434343] mt-5 text-center text-xs sm:text-lg">Your message has been sent 😊 </p>
					</div>
				</motion.div>
			</div>
		</>
	);
};
