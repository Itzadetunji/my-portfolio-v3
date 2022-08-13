// Get Contact Form Data and send email with nodemailer
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
	const { name, email, subject, message } = req.body;

	if (!name || !email || !subject || !message) {
		return res.status(400).json({ error: "All fields are required" });
	}

	// Create transporter
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "adetunjiadeyinka29@gmail.com",
			pass: "orbetykdwfdwmdsu",
		},
	});

	// Create mail options
	const mailOptions = {
		from: email,
		to: "adetunjiadeyinka29@gmail.com",
		replyTo: email,
		subject: `${subject} — Contact Form: adetunjiadeyinka.com`,
		text: message,
		html: `
			<h1>You have a New message from ${email}</h1>
			<h2>Name:</h2>
			<p>${name}</p>
			<h2>Subject:</h2>
			<p>${subject}</p>
			<h2>Message:</h2>
			<p>${message}</p>
		`,
	};

	try {
		// Send email
		await transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				return res.status(500).json({ error: err.message });
			}
			return res.status(200).json({ message: "Email sent" });
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
}