import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/inertia-react";

const Transaction = (props) => {
    const transactions = usePage().props;
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        ></AuthenticatedLayout>
    );
};

export default Transaction;
