import Link from "next/link";
import Navigation from "./Navigation";
import gitHubIcon from "@/public/logos/github-icon-2.svg";
import linkedinIcon from "@/public/logos/linkedin-icon.svg";
import twitterIcon from "@/public/logos/x-2.svg";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full mb-10 border-b shadow-sm bg-white/50">
            <Navigation />
        </header>
    );
}
