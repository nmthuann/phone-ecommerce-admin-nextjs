"use client";
import { Button } from "@/components/ui/button";
import { RefreshCcwIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ErrorComponentProps {
    page: string;
    message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ page, message }) => {
    const router = useRouter();
    return (
        <div className="flex-col items-center justify-center h-screen p-5">
            <h1 className="text-4xl font-bold mb-4">{page}</h1>
            <p className="text-lg text-red-600 ">{message}</p>
            <div className="space-x-4">
                <Link
                    href="/"
                    className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-white px-4 py-2
        font-semibold text-light hover:border-slate-900 hover:bg-slate-100 hover:text-dark
        dark:bg-slate-900 dark:text-white hover:dark:bg-slate-900 hover:dark:text-light hover:dark:border-light
        "
                >
                    Go To Home
                </Link>
                <Button type="button" onClick={() => router.refresh()}>
                    <RefreshCcwIcon className="mr-2 h-4 w-4" /> Refresh Page
                </Button>
            </div>
        </div>
    );
};

export default ErrorComponent;
