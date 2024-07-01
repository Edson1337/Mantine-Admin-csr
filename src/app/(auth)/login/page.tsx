"use client";
import { useEffect, useState } from 'react';
import { LoginForm } from '@/components/Auth/LoginForm';

export default function Login() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
	  setIsClient(true);
	}, []);
  
	if (!isClient) {
	  return null; // ou um loader, se preferir
	}
	return <LoginForm />;
}
