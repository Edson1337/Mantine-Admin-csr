"use client";
import { useEffect, useState } from 'react';
import { RegisterForm } from '@/components/Auth/RegisterForm';

export default function Register() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
	  setIsClient(true);
	}, []);
  
	if (!isClient) {
	  return null; // ou um loader, se preferir
	}
	return (
		<RegisterForm />
	);
}
