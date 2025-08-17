import { useMemo, useState } from 'react';
import { getProjectsData, getCategories } from '../../../data/projectsData';
import { useTranslations } from '../../../hooks/useTranslations';

export const useProjectFilter = () => {
    const { t } = useTranslations();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = useMemo(() => getCategories(t), [t]);
    const projectsData = useMemo(() => getProjectsData(t), [t]);

    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'All') {
            return projectsData;
        }
        return projectsData.filter(project => project.category === selectedCategory);
    }, [selectedCategory, projectsData]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return {
        selectedCategory,
        categories,
        filteredProjects,
        handleCategoryChange
    };
};
