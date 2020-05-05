import React from 'react';
import { Link } from 'react-router-dom';

class CategoriesBar extends React.Component {
    componentDidMount() {
        this.props.requestAllCategories();
    }

    render() {
        const { categories } = this.props;
        const categoryList = categories.map((category) => (
            <li key={category.id}>
                <Link to={`/categories/${category.id}/stories`}>{category.title}</Link>
            </li>
        ));

        return (
            <div className="category-bar">
                <ul className="category-list">
                    {categoryList}
                </ul>
            </div>
        )
    }
}

export default CategoriesBar;