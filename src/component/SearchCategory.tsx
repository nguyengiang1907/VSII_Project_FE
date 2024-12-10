import React, { useState, useEffect } from 'react';
import "../css/SearchCategory.css";
import { FiSearch } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosArrowDown } from "react-icons/io";
import CategoryNode from "./CategoryNode"; // Điều chỉnh đường dẫn



// Interface cho Category
interface Category {
    id: number;
    name: string;
    logo: string;  // Thêm thuộc tính logo
    subCategories: Category[];
}

// Props cho CategoryTree
interface CategoryTreeProps {
    categories: Category[];
}


const SearchCategory: React.FC<CategoryTreeProps> = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [expandedCategories, setExpandedCategories] = useState<Record<number, boolean>>({});
    const [showCategories, setShowCategories] = useState(false); // Kiểm soát hiển thị danh sách
    // const input = document.querySelector('input');
 

    // Toggle hiển thị danh sách
    const toggleShowCategories = () => {
        setShowCategories(!showCategories);
    };

    return (
        <body>
            <div className="layout">
                <div className="search-bar" onClick={toggleShowCategories}>
                    <div className="search-container">
                        <div className="icon-search">
                            <FiSearch />
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Tìm kiếm thiết bị bạn muốn bán từ danh sách"
                                id='input'
                            />
                        </div>
                    </div>
                    <div className="icon-down" >
                        <IoIosArrowDown />
                    </div>
                </div>
                {showCategories && (
                    <div className="form-container">
                        <div className="category-layout">
                            <ul>
                                {categories.map((category) => (
                                    <CategoryNode
                                        key={category.id}
                                        category={category}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                        expandedCategories={expandedCategories}
                                        setExpandedCategories={setExpandedCategories}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </body>
    );
};

export default SearchCategory;
