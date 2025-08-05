import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { Edit } from 'lucide-react';
import React from 'react';
import Editor from '../../_component/Editor';

async function page({ params }: { params: { workflowId: string } }) {
    const { workflowId } = params;
    const { userId } = auth();
    if (!userId) {
        return <div>Please log in to view this workflow.</div>;
    }

    const workflow = await prisma.workflow.findUnique({
        where: {
            id: workflowId,
            userId: userId,
        },
    });

    if (!workflow) {
        return <div>Workflow not found.</div>;
    }

    return (
        <Editor
            workflow={workflow}
        />
    )
}

export default page;