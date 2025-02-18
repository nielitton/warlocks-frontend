/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from '@/services/api';
import { useEffect } from 'react';

const useCheckApiHealth = () => {
    return useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                const response = await api.get<string>("/health-check");

                console.log('API Health Check:', response.data);
                return response.data;
            } catch (error: any) {
                const errorMessage = error.response?.data?.message

                throw new Error(errorMessage)
            }
        }, 10 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);
};

export default useCheckApiHealth;
