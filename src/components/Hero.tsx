import React from 'react';

import { HeroProps } from '@homework-task/types/interfaces';

export const Hero = ({ title, image }: HeroProps) => {
    return (
        <div className="flex row justify-center items-center gap-4 h-100">
            <div className="w-4/12">
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>
            <div className="w-4/12">
                <img src={image} width="100%" alt="Hero" loading="eager" />
            </div>
        </div>
    );
};
