"use client";

import {Heading} from "@/components/ui/heading";
import {Separator} from "@/components/ui/separator";
import {useParams, useRouter} from "next/navigation";
import {DataTable} from "@/components/ui/data-table";
import {columns, OrderColumn} from "@/app/(dashboard)/[storeId]/(routes)/orders/components/columns";

interface BillBoardProps {
    data: OrderColumn[]
}
export const OrderClient: React.FC<BillBoardProps> = ({
    data
                                                          }) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Orders (${data.length})`}
                    description="Manage orders for your store"
                />
            </div>
            <Separator />
            <DataTable
                searchKey="products"
                columns={columns}
                data={data}
            />
        </>
    )
}