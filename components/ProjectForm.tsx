'use client';

import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import { SessionInterface } from '@/common.types';
import FormField from './FormField';
import CustomMenu from './CustomMenu';
import { categoryFilters } from '@/constants';

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

    const handleStateChange = (fieldName: string, value: string) => {
        setform((prevState) => ({ ...prevState, [fieldName]: value }))
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

            <FormField
                title="Title"
                state={form.title}
                placeholder="Flexibble"
                setState={(value) => handleStateChange('title', value)}
            />

            <FormField
                title="Description"
                state={form.description}
                placeholder="Showcase and discover remakable developer project."
                setState={(value) => handleStateChange('description', value)}
            />

            <FormField
                type="url"
                title="Website URL"
                state={form.liveSiteUrl}
                placeholder="https://eRa.dev"
                setState={(value) => handleStateChange('liveSiteUrl', value)}
            />

            <FormField
                type="url"
                title="GitHub URL"
                state={form.githubUrl}
                placeholder="https://github.com/RamadanEmin"
                setState={(value) => handleStateChange('githubUrl', value)}
            />

            <CustomMenu
                title="Category"
                state={form.category}
                filters={categoryFilters}
                setState={(value) => handleStateChange('category', value)}
            />

        </form>
    );
}

export default ProjectForm;