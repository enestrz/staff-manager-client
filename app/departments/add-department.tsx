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
import { PlusIcon } from "lucide-react";
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
import { addDepartment } from "@/data/department";
import toast from "react-hot-toast";
import { useState } from "react";

const formSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Username must be at least 3 characters." })
        .max(255),
});

export default function DepartmentAddDialog() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setDialogOpen(false);
        toast.promise(addDepartment({ name: values.name }), {
            loading: "Adding department...",
            success: "Department added successfully",
            error: "An error occurred while adding department",
        });
    }

    return (
        <Dialog
            modal
            open={dialogOpen}
            onOpenChange={setDialogOpen}
        >
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className=""
                >
                    <PlusIcon
                        className="mr-2 size-4"
                        absoluteStrokeWidth
                    />
                    Add Department
                </Button>
            </DialogTrigger>

            {/* Add Department */}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Department</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
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
                                    <FormDescription>
                                        This is department name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Add Department</Button>
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
