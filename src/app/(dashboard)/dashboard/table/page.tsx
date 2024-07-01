"use client";
import { useEffect, useState } from 'react';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { PaginationTable } from '@/components/Table/PaginationTable';
import { SimpleTable } from '@/components/Table/SimpleTable';

export default function TablePage() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
	  setIsClient(true);
	}, []);
  
	if (!isClient) {
	  return null; // ou um loader, se preferir
	}
	return (
		<PageContainer title="Tables">
			<SimpleTable />
			<PaginationTable />
		</PageContainer>
	);
}
