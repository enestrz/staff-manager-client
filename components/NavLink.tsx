import Link from "next/link";

interface Props {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href, children }): JSX.Element => {
    return (
        <li>
            <Link
                href={href}
                className="font-medium text-gray-800 hover:text-gray-900 transition-colors duration-200 
                                border-b-2 border-transparent hover:border-gray-800 
                            flex flex-row items-center gap-1
                            "
            >
                {children}
            </Link>
        </li>
    );
};

export default NavLink;
