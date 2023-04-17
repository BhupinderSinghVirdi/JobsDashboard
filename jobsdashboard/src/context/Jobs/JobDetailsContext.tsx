import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type JobsDetailsType = {
  _id: string;
  date: string;
  company: string;
  company_logo: string;
  position: string;
  logo: string;
  description: string;
  location: string;
  salary_min: number;
  salary_max: number;
};

type JobDetailsContextProviderProps = {
  children: ReactNode;
};

type JobDetailsContextType = {
  jobDetails: JobsDetailsType | null;
  getJobDetails: (id: string) => Promise<void>;
};

export const JobDetailsContext = createContext<JobDetailsContextType>({
  jobDetails: null,
  getJobDetails: async () => {},
});

const JobDetailsContextProvider: React.FC<JobDetailsContextProviderProps> = ({ children }) => {
    const [jobDetails, setJobDetails] = useState<JobsDetailsType | null>(null);

    const getJobDetails = useCallback(async (id: string) => {
        try {
        const response = await axios.get(`https://jobs-dashboard-api.onrender.com/api/jobs/${id}`);
        setJobDetails(response.data);
        } catch (error) {
        console.log(error);
        }
    }, []);

    const { id } = useParams<{ id?: string }>();
    useEffect(() => {
    id && getJobDetails(id);
    }, [id, getJobDetails]);

  return <JobDetailsContext.Provider value={{ jobDetails, getJobDetails }}>{children}</JobDetailsContext.Provider>;
};

export default JobDetailsContextProvider;