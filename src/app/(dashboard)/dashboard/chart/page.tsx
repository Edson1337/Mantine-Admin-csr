"use client";
import { useEffect, useState } from 'react';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function Chart() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
	  setIsClient(true);
	}, []);
  
	if (!isClient) {
	  return null; // ou um loader, se preferir
	}
	return <PageContainer title="Chart">Chart</PageContainer>;
}
