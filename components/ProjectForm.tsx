'use client';

import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { SessionInterface } from '@/common.types';

type Props = {
    type: string,
    session: SessionInterface,
}

const ProjectForm = ({ type, project }: Props) => {
    const [form, setform] = useState({
        title: project?.title || '',
        description: project?.description || '',
        image: project?.image || '',
        liveSiteUrl: project?.liveSiteUrl || '',
        githubUrl: project?.githubUrl || '',
        category: project?.category || ''
    });

    const handleFormSubmit = async (e: React.FormEvent) => {
   
    };

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {

    };

    return (
        <form onSubmit={handleFormSubmit} className="flexStart form">
            <div className="flexStart form_image-container">
                <label htmlFor="poster" className="flexCenter form_image-label">
                    {!form.image && 'Chose a poster for your project'}
                </label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    required={type === 'create'}
                    className="form_image-input"
                    onChange={handleChangeImage}
                />
                {form.image && (
                    <Image
                        src={form?.image}
                        alt="Project poster"
                        className="sm:p-10 object-contain z-20"
                        fill
                    />
                )}
            </div>
        </form>
    );
}

export default ProjectForm;