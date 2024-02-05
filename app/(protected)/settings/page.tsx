"use client";

import { useSession } from "next-auth/react";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { settings } from "@/actions/settings";
import { Settings } from "lucide-react";

const SettingsPage = () => {
    const { update, data } = useSession();

    const [isPending, startTransition] = useTransition();
    const onClick = () => {
        startTransition(() => {
            settings({
                name: "Martin",
            }).then(() => {
                update();
            });
        });
    };

    return (
        <Card className="w-[600px]">
            <CardHeader className="text-2xl font-semibold flex justify-center items-center flex-row">
                <Settings className="mr-2 h-8 w-8" />
                Settings
            </CardHeader>
            <CardContent>
                <p>Name: {data?.user?.name}</p>
                <Button disabled={isPending} onClick={onClick}>
                    Update
                </Button>
            </CardContent>
        </Card>
    );
};

export default SettingsPage;
