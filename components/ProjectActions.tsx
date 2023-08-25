'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ProjectActions = ({ projectId }: { projectId: string }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteProject = async () => {
  
    };

    return (
        <>
            <Link href={`/edit-project/${projectId}`} className="flexCenter edit-action_btn">
                <Image src="/pencile.svg" alt="edit" width={15} height={15} />
            </Link>

            <button
                type="button"
                onClick={handleDeleteProject}
                className={`flexCenter delete-action_btn ${isDeleting ? 'bg-gray' : 'bg-primary-purple'}`}
            >
                <Image src="/trash.svg" alt="delete" width={15} height={15} />
            </button>
        </>
    );
}

export default ProjectActions;