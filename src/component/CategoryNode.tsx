import React, { useState } from 'react';
import "../css/CategoryNode.css";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";




// Interface cho Category
interface Category {
    id: number;
    name: string;
    logo: string;  // Thêm thuộc tính logo
    subCategories: Category[];
}
const CategoryNode = ({
    category,
    selectedCategory,
    setSelectedCategory,
    expandedCategories,
    setExpandedCategories,
}: {
    category: Category;
    selectedCategory: number | null;
    setSelectedCategory: React.Dispatch<React.SetStateAction<number | null>>;
    expandedCategories: Record<number, boolean>;
    setExpandedCategories: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}) => {
    const isExpanded = expandedCategories[category.id] || false;

    const handleToggle = () => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category.id]: !isExpanded,
        }));
    };

    return (
        <>
        <li className='list-unstyled all-category'>
            <div
                className={`category-data ${selectedCategory === category.id ? "selected" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategory(category.id);
                }}
            >
                <div className="category-logo">
                    <img src={category.logo} alt={category.name} />
                </div>
                <div className="category-container">
                    <div className="category-name">
                        <span>{category.name}</span>
                    </div>
                    {category.subCategories.length > 0 && (
                        <button
                            className="button-category"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleToggle();
                            }}
                        >
                            {isExpanded ? <GrFormSubtract /> : <IoMdAdd />}
                        </button>
                    )}
                </div>
            </div>
            <>
                {isExpanded && category.subCategories.length > 0 && (
                    <>
                        <ul className="list-unstyled sub">
                            <div className='sub'>
                                {category.subCategories.map((child) => (
                                    <CategoryNode
                                        key={child.id}
                                        category={child}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                        expandedCategories={expandedCategories}
                                        setExpandedCategories={setExpandedCategories}
                                    />
                                ))}
                            </div>
                        </ul>
                    </>
                )}
            </>
        </li>
        </>
    );
};
export default CategoryNode;
