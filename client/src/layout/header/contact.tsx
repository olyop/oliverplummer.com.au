import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";
import PaperAirplaneIcon from "@heroicons/react/20/solid/PaperAirplaneIcon";
import Button from "components/button";
import Modal from "components/modal";
import { useModal } from "hooks/use-modal";
import { useReCaptcha } from "hooks/use-re-captcha";
import { FC, Fragment, useEffect, useState } from "react";

import { ContactCopyButtons } from "./contact-buttons";

const Contact: FC = () => {
	const [isModalOpen, openModal, closeModal] = useModal(false);
	const [reCaptchaError, setReCaptchaError] = useState<string | null>(null);
	const [contactDetails, setContactDetails] = useState<ContactDetails | null>(null);

	const [reCaptchaToken, getReCaptchaToken] = useReCaptcha("getContactDetails");

	const getContactDetails = async () => {
		if (reCaptchaToken) {
			const url = new URL(import.meta.env.VITE_GET_CONTACT_DETAILS_URL);
			url.searchParams.set("reCaptchaToken", reCaptchaToken);

			const response = await fetch(url, {
				method: "GET",
				mode: "cors",
				headers: {
					"Accept": "application/json",
				},
			});

			if (response.ok) {
				const verifyResponse = (await response.json()) as GetContactDetailsResponse;

				if (verifyResponse.error) {
					console.error(reCaptchaError);
					setReCaptchaError(verifyResponse.error);
				} else {
					setContactDetails(verifyResponse.contactDetails);
				}
			}
		}
	};

	useEffect(() => {
		if (isModalOpen) {
			getReCaptchaToken();
		}
	}, [isModalOpen]);

	useEffect(() => {
		if (reCaptchaToken) {
			void getContactDetails();
		}
	}, [reCaptchaToken]);

	return (
		<Fragment>
			<Button
				text="Contact"
				ariaLabel="Contact"
				textClassName="text-xl"
				spanClassName="text-primary"
				onClick={openModal}
				rightIcon={className => <PaperAirplaneIcon className={className} />}
				className="sm:w-auto gap-2 sm:gap-4 bg-white shadow-3xl w-full h-full border-2 hover:border-secondary-dark border-secondary md:h-14 px-4 sm:px-6 shadow-secondary-dark hover:!shadow-4xl hover:shadow-secondary-dark hover:bg-secondary"
			/>
			<Modal
				title="Contact"
				isOpen={isModalOpen}
				onClose={closeModal}
				icon={className => <PaperAirplaneIcon className={className} />}
				contentClassName="flex flex-col gap-10 py-6 relative"
			>
				{contactDetails === null && (
					<Fragment>
						<div className="absolute top-0 left-0 w-full h-full bg-white opacity-80 z-10" />
						<div className="absolute top-1/2 left-1/2 z-10 flex flex-col gap-4 items-center w-48 -translate-x-1/2 -translate-y-1/2">
							<p className="text-center p-2 bg-white">Verifying you are not a robot</p>
							<ArrowPathIcon className="w-12 h-12 animate-spin " />
						</div>
					</Fragment>
				)}
				<div className="flex flex-col items-center justify-center gap-2">
					<p className="text-sm text-center sm:text">
						You can contact
						<br /> me via email at
					</p>
					<ContactCopyButtons text={contactDetails?.emailAddress ?? "**************************"} scheme="mailto" />
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<p className="text-sm text-center sm:text">
						If you prefer
						<br /> call or text me on
					</p>
					<ContactCopyButtons text={contactDetails?.mobileNumber ?? "************"} scheme="tel" />
				</div>
			</Modal>
		</Fragment>
	);
};

interface ContactDetails {
	emailAddress: string;
	mobileNumber: string;
}

interface GetContactDetailsResponse {
	error?: string;
	contactDetails: ContactDetails;
}

export default Contact;
