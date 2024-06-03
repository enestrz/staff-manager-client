"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { RotateCw, Trash2Icon } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteDepartment } from "@/data/department";
import toast from "react-hot-toast";

interface Props {
    id: number;
    name: string;
    toggleDropdown: (open: boolean) => void;
}

export default function DepartmentDeleteDialog({
    id,
    name,
    toggleDropdown,
}: Props) {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDeleteDialogOpen(false);
        toggleDropdown(false);
        await toast.promise(deleteDepartment(id), {
            loading: "Deleting department...",
            success: "Department deleted successfully",
            error: "An error occurred while deleting department",
        });
    };

    return (
        <Dialog
            modal
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
        >
            <DialogTrigger asChild>
                <DropdownMenuItem
                    onSelect={(e) => {
                        e.preventDefault();
                    }}
                    className="flex flex-row items-center justify-between p-2"
                >
                    Delete
                    <Trash2Icon
                        size={18}
                        color="red"
                    />
                </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete "{name}"</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. Are you sure you want to
                        permanently delete this file from our servers?
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit}>
                    <p>
                        All data associated with this department will be
                        permanently deleted.
                    </p>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DialogClose>

                        <Button
                            type="submit"
                            variant="destructive"
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
