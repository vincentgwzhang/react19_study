'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Practice3() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.replace('/practice4?from=practice3');
        }, 2000);
    }, [router]);

    return (
        <div className="space-y-4 p-6">
            <h1 className="text-2xl font-bold">Practice 3</h1>
            <p>loading...</p>
        </div>
    );
}