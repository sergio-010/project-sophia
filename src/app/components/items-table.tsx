"use client";
import { useRouter } from "next/navigation";
interface ItemsTableProps {
    title: string;
    description: string;
    url: string;
}

const ItemsTable = ({ title, description, url }: ItemsTableProps) => {
    const router = useRouter();

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6 capitalize text-purple-500">{title}</td>
            <td className="py-4 px-6 cursor-pointer hover:text-white" onClick={() => router.push(url)}>{description}</td>
        </tr>
    );
};

export default ItemsTable;
