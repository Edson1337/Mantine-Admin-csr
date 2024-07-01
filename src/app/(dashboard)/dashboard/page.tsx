"use client";
import { useEffect, useState } from 'react';
import { DashboardContent } from '@/components/Dashboard/DashboardContent';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function Dashboard() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
	  setIsClient(true);
	}, []);
  
	if (!isClient) {
	  return null; // ou um loader, se preferir
	}
	return (
		<PageContainer title="Dashboard">
			<DashboardContent />
		</PageContainer>
	);
}
