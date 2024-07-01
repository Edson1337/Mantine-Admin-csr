"use client";
import { useEffect, useState } from 'react';
import { SimpleForm } from '@/components/Form/SimpleForm';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function Form() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
	  setIsClient(true);
	}, []);
  
	if (!isClient) {
	  return null; // ou um loader, se preferir
	}
	return (
		<PageContainer title="Forms">
			<SimpleForm />
		</PageContainer>
	);
}
