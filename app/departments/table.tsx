import { getAllDepartments } from "@/data/department";
import DepartmentActions from "./table-actions";
import DepartmentAddDialog from "./add-department";

export default async function DepartmentsTable() {
    const departments = await getAllDepartments();

    return (
        <div>
            <div className="flex justify-end items-center mb-4">
                <DepartmentAddDialog />
            </div>

            <div className="overflow-x-auto rounded-lg shadow-md ">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md ">
                    <thead className="">
                        <tr className="bg-primary text-primary-foreground text-gray-600 uppercase text-sm leading-normal ">
                            <th className="py-3 px-6 text-left max-w-[50px]">
                                ID
                            </th>
                            <th className="py-3 px-6 text-left">Title</th>
                            <th
                                colSpan={1}
                                className="py-3 px-6 text-center"
                            >
                                Number of Employees
                            </th>
                            <th className="py-3 px-6 text-center">
                                Avg Salary
                            </th>

                            <th className="py-3 px-6 text-right pr-8"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {departments ? (
                            departments.map((department, index) => (
                                <tr
                                    key={department.id}
                                    className="border-b border-gray-200 hover:bg-gray-100"
                                >
                                    <td className="py-3 px-6 text-left max-w-[50px]">
                                        <div className="flex items-center">
                                            <span className="font-medium">
                                                {index + 1}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <span className="font-medium">
                                                {department.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-center font-medium">
                                        {department.employees?.length || 0}
                                    </td>

                                    <td className="py-3 px-6 text-center font-medium">
                                        35,000.00
                                    </td>

                                    <td className="py-4 px-6 text-right">
                                        <div className="flex items-center gap-2 h-full justify-end">
                                            <DepartmentActions
                                                id={department.id}
                                                title={department.name}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr
                                key="0"
                                className="text-center"
                            >
                                <td colSpan={5}>
                                    <div className="p-5 w-full text-center text-lg">
                                        There is no data
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
