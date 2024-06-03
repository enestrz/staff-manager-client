"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Pencil, PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { updateDepartment } from "@/data/department";
import toast from "react-hot-toast";

const formSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Username must be at least 3 characters." })
        .max(255),
});

interface Props {
    id: number;
    name: string;
    toggleDropdown: (open: boolean) => void;
}

export default function DepartmentEditDialog({
    id,
    name,
    toggleDropdown,
}: Props) {
    const [editDialogOpen, setEditDialogOpen] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: name,
        },
    });

    async function handleSubmit(values: z.infer<typeof formSchema>) {
        setEditDialogOpen(false);
        toggleDropdown(false);
        await toast.promise(updateDepartment(id, { name: values.name }), {
            loading: "Updating department...",
            success: "Department updated successfully",
            error: "An error occurred while updating department",
        });
    }

    return (
        <Dialog
            modal
            open={editDialogOpen}
            onOpenChange={setEditDialogOpen}
        >
            <DialogTrigger asChild>
                <DropdownMenuItem
                    onSelect={(e) => {
                        e.preventDefault();
                    }}
                    // onClick={toggleDialog}
                    className="flex flex-row items-center justify-between p-2"
                >
                    Edit
                    <Pencil size={18} />
                </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Department</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Department Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    {/* <FormDescription>
                                        This is department name.
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Update Department</Button>
                            <DialogClose asChild>
                                <Button variant="secondary">Cancel</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
