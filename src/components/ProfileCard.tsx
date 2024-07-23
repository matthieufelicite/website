"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export default function ProfileCard() {

    return (

        <CardContainer className="w-60">

            <CardBody className="w-60 bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">

                <CardItem translateZ="100" className="w-60">

                    <Image src="/pp.png" height="1000" width="1000" className="h-60 w-60 object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
                </CardItem>

                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white mt-4">

                    Matthieu FELICITE
                </CardItem>

                <div className="flex justify-between items-center mt-4 gap-4">

                    <CardItem translateZ={20} as="button" className={cn(buttonVariants({ variant: 'default' }), "flex-1")}><DevicePhoneMobileIcon className="mr-2 h-4 w-4" />Téléphone</CardItem>

                    <CardItem translateZ={20} as="button" className={cn(buttonVariants({ variant: 'default' }), "flex-1")}><EnvelopeIcon className="mr-2 h-4 w-4" />Email</CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}