import React from 'react';
import { Tag } from 'antd';

const TagList = ({ 
    items, 
    className = 'tag-list',
    sortBy = null,
    maxItems = null,
    showIcon = true
}) => {
    const processItems = () => {
        let processedItems = [...items];
        
        // Sort items if sortBy function is provided
        if (sortBy) {
            processedItems.sort(sortBy);
        }
        
        // Limit items if maxItems is provided
        if (maxItems) {
            processedItems = processedItems.slice(0, maxItems);
        }
        
        return processedItems;
    };

    const processedItems = processItems();

    return (
        <div className={className}>
            {processedItems.map((item, index) => (
                <Tag 
                    key={index} 
                    icon={showIcon && item.icon ? item.icon : null}
                    color={item.color}
                    className={item.className}
                    style={item.style}
                >
                    {item.name || item.label || item}
                </Tag>
            ))}
        </div>
    );
};

export default TagList;
