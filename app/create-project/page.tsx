import { redirect } from 'next/navigation';

import Modal from '@/components/Modal';
import { getCurrentUser } from '@/lib/session';

const CreateProject = async () => {
    const session = await getCurrentUser();

    if (!session?.user) {
        redirect('/');
    }

    return (
        <Modal>
            <h3 className="modal-head-text">Create a New Project</h3>
        </Modal>
    );
}

export default CreateProject;