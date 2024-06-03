import Image from "next/image";
import Link from "next/link";
import gitHubIcon from "@/public/logos/github-icon-2.svg";
import linkedinIcon from "@/public/logos/linkedin-icon.svg";
import twitterIcon from "@/public/logos/x-2.svg";
import NavLink from "./NavLink";

export default function Navigation() {
    return (
        <nav className="flex flex-row items-center container py-4">
            <ul className="flex flex-row gap-4 items-baseline ">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/departments">Departments</NavLink>
                <NavLink href="/employees">Employees</NavLink>
            </ul>

            <ul className="flex flex-row gap-3 justify-end items-center ml-auto">
                <li>
                    <Link
                        href="https://github.com/enestrz"
                        target="_blank"
                    >
                        <Image
                            priority
                            src={gitHubIcon}
                            alt="GitHub"
                            width={24}
                            height={24}
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.linkedin.com/in/enestrz/"
                        target="_blank"
                    >
                        <Image
                            priority
                            src={linkedinIcon}
                            alt="LinkedIn"
                            width={24}
                            height={24}
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://x.com/enesterzi0"
                        target="_blank"
                    >
                        <Image
                            priority
                            src={twitterIcon}
                            alt="X or Twitter"
                            width={24}
                            height={24}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
