import { useState, useEffect } from 'react';
import { setCookie, getCookie } from '../utils/cookies';

export const useAuth = () => {
	const [secretKey, setSecretKey] = useState<string>('');
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isInitializing, setIsInitializing] = useState(true);

	// Check for existing authentication on mount
	useEffect(() => {
		const savedSecretKey = getCookie('secretKey');
		if (savedSecretKey) {
			setSecretKey(savedSecretKey);
			setIsAuthenticated(true);
		}
		setIsInitializing(false);
	}, []);

	const saveSecretKey = (key: string) => {
		setSecretKey(key);
		setCookie('secretKey', key);
		setIsAuthenticated(true);
	};

	const logout = () => {
		setSecretKey('');
		setIsAuthenticated(false);
		setCookie('secretKey', '', -1); // Delete cookie
	};

	return {
		secretKey,
		isAuthenticated,
		isInitializing,
		saveSecretKey,
		logout,
	};
};
