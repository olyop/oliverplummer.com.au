import { Bars4Icon } from "@heroicons/react/24/outline";
import Modal from "components/modal";
import { useModal } from "hooks/use-modal";
import { FC, Fragment } from "react";

import FooterButton from "./button";

const FooterTechStackButton: FC = () => {
	const [isModalOpen, openModal, closeModal] = useModal();
	return (
		<Fragment>
			<FooterButton
				text="Tech Stack"
				onClick={openModal}
				leftIcon={className => <Bars4Icon className={className} />}
			/>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				title="Tech Stack"
				icon={className => <Bars4Icon className={className} />}
				subTitle="The tech stack for oliverplummer.com.au"
				contentClassName="p-6"
			>
				<ol>
					<li>React</li>
					<li>React Router</li>
					<li>Heroicons React</li>
					<li>Tailwind CSS</li>
					<li>TypeScript</li>
				</ol>
				<ol>
					<li>Lambda</li>
					<li>S3 Bucket</li>
					<li>CloudFront</li>
					<li>Route53</li>
				</ol>
			</Modal>
		</Fragment>
	);
};

export default FooterTechStackButton;
