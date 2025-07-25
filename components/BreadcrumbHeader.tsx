'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

function BreadcrumbHeader() {
    const pathName = usePathname();
    return (
        <div>Breadcrumb</div>
    )
}

export default BreadcrumbHeader;
