import React, { useRef, useLayoutEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/CategoryNode.css";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

// Interface cho Category
interface Category {
    id: number;
    name: string;
    logo: string;
    subCategories: Category[];
}

const CategoryNode = ({
    category,
    selectedCategory,
    setSelectedCategory,
    expandedCategories,
    setExpandedCategories,
    level = 1,
}: {
    category: Category;
    selectedCategory: number | null;
    setSelectedCategory: React.Dispatch<React.SetStateAction<number | null>>;
    expandedCategories: Record<number, boolean>;
    setExpandedCategories: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
    level?: number;
}) => {
    const categoryRef = useRef<HTMLUListElement | null>(null);

    // Hàm tính chiều cao và cập nhật trước
    const markLastItem = (ul: HTMLUListElement) => {
        const directChildLis = Array.from(ul.children).filter(
            (child) => child.tagName === "LI"
        ) as HTMLLIElement[];
    
        if (directChildLis.length === 0) {
            ul.style.setProperty("--before-height", `0px`); // Đặt chiều cao về 0 nếu không có phần tử con
        } else {
            const lastLi = directChildLis[directChildLis.length - 1];
            const ulHeight = ul.offsetHeight;
            const lastLiHeight = lastLi.offsetHeight;
            const beforeHeight = (ulHeight - lastLiHeight) * 1.05;
            ul.style.setProperty("--before-height", `${beforeHeight}px`);
        }
    };

    // Hàm cập nhật chiều cao cho các bậc cha của ul
    const updateParentHeights = (ul: HTMLUListElement | null) => {
        while (ul) {
            markLastItem(ul);  // Tính lại chiều cao cho phần tử hiện tại
            ul = ul.parentElement?.closest("ul") as HTMLUListElement | null;
        }
    };    

    const handleToggle = () => {
        // Đảo trạng thái mở rộng
        setExpandedCategories((prev) => ({
            ...prev,
            [category.id]: !prev[category.id], // Đảo ngược trạng thái
        }));
    
        if (categoryRef.current) {
            requestAnimationFrame(() => {
                updateParentHeights(categoryRef.current); // Cập nhật chiều cao
            });
        }
    };

    const isExpanded = expandedCategories[category.id] || false;

    useLayoutEffect(() => {
        if (categoryRef.current) {
            updateParentHeights(categoryRef.current);
        }
    }, [expandedCategories]);
    
    
    
    return (
        <li className="list-unstyled all-category">
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
            {isExpanded && category.subCategories.length > 0 && (
                <ul className="list-unstyled sub-categories" ref={categoryRef}>
                    {category.subCategories.map((subCategory) => (
                        <li
                            key={subCategory.id}
                            className={`list-unstyled sub-category-item level-${level}`}
                            data-level={level}
                        >
                            <div className="navigation"></div>
                            <CategoryNode
                                key={subCategory.id}
                                category={subCategory}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                expandedCategories={expandedCategories}
                                setExpandedCategories={setExpandedCategories}
                                level={level + 1}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default CategoryNode;
