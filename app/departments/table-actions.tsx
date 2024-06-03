"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Dialog } from "@radix-ui/react-dialog";
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { deleteDepartment, updateDepartment } from "@/data/department";
import toast from "react-hot-toast";
import DepartmentEditForm from "./edit-department";
import DepartmentDeleteForm from "./delete-department";
import DepartmentDeleteAction from "./delete-department";
import DepartmentEditAction from "./edit-department";

interface Props {
    id: number;
    title: string;
}

export default function DepartmentActions({ id, title }: Props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (open: boolean) => {
        setDropdownOpen(open);
    };

    return (
        <DropdownMenu
            open={dropdownOpen}
            onOpenChange={setDropdownOpen}
        >
            <DropdownMenuTrigger asChild>
                <MoreHorizontal
                    role="button"
                    className=""
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* Edit Dialog */}
                <DepartmentEditAction
                    id={id}
                    name={title}
                    toggleDropdown={toggleDropdown}
                />
                {/*End of Edit Dialog */}
                {/********************************/}
                {/* Delete Dialog */}
                <DepartmentDeleteAction
                    id={id}
                    name={title}
                    toggleDropdown={toggleDropdown}
                />
                {/*End of Delete Dialog */}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
