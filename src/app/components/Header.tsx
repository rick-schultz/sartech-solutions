import Image from "next/image";

import logo from "@/app/assets/images/logo.svg";
import name from "@/app/assets/images/name.svg";

export default function Header() {
	return (
		<header className="flex flex-row justify-between items-center p-4 px-8 bg-slate-800">
				<a href="/">
					<Image
						src={logo}
						alt="SARTech Solutions Logo"
						width={50}
						height={50}
					/>
				</a>
				<a href="/">
					<Image
						src={name}
						alt="SARTech Solutions Name"
						height={35}
					/>
				</a>
			<nav className="flex flex-row">
				<a href="/about" className="p-2">About</a>
				<a href="/contact" className="p-2">Contact</a>
			</nav>
		</header>
	);
}