"use server";

import { revalidateTag } from "next/cache";
import { Employee } from "./employees";

type Department = {
    id: number;
    name: string;
    employees?: Employee[];
};

type AddDepartment = {
    name: string;
};

type UpdateDepartment = {
    name: string;
};

// GET /api/departments
export async function getAllDepartments(): Promise<Department[] | null> {
    try {
        const response = await fetch("http://localhost:5144/api/departments", {
            cache: "no-cache",
            next: {
                tags: ["departments"],
            },
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        return null;
    }
}

// POST /api/departments
export async function addDepartment(
    department: AddDepartment
): Promise<Department | null> {
    revalidateTag("departments");
    try {
        const response = await fetch("http://localhost:5144/api/departments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(department),
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        return null;
    }
}

// PUT /api/departments/:id
export async function updateDepartment(
    id: number,
    department: UpdateDepartment
): Promise<Department | null> {
    revalidateTag("departments");
    try {
        const URL = `http://localhost:5144/api/departments/${id}`;
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(department),
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        return null;
    }
}

// DELETE /api/departments/:id
export async function deleteDepartment(id: number): Promise<boolean> {
    revalidateTag("departments");
    try {
        const URL = `http://localhost:5144/api/departments/${id}`;
        const response = await fetch(URL, { method: "DELETE" });

        return response.ok;
    } catch (error) {
        return false;
    }
}
