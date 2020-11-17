import React from 'react';
import { Link } from 'react-router-dom';
import dateUtil from '../../util/date_util';

class StoryIndex extends React.Component {
    componentDidMount() {
        this.props.requestCategoryStories(this.props.match.params.categoryId);
    }

    componentDidUpdate(oldProps) {
        if (this.props.match.params.categoryId !== oldProps.match.params.categoryId) {
            this.props.requestCategoryStories(this.props.match.params.categoryId);
        }
    }

    render() {
        const { category, stories } = this.props;
        // console.log(category)
        // console.log("ABOVE IS CATEGORY")

        if (!this.props.category) return null;

        const storyList = stories.map((story) => {
            return (
                <li key={story.id}>
                    <ul className='story-info'>
                        <li className='story-info-title'>
                            <Link to={`/stories/${story.id}`}>{story.title}</Link>
                        </li>
                        <li>{story.author}</li>
                        <ul className="story-bottom">
                            <li>
                                {dateUtil(story.updated_at)}
                            </li>
                            <li>
                                <i className="fas fa-circle"></i>
                            </li>
                            <li>
                                {`${Math.floor(Math.random() * 10 + 2)} min read`}
                            </li>
                        </ul>
                    </ul>
                </li>
            )
        })

        return (
            <div className='stories'>
                <div className="stories-top">
                    <h1>{category.title}</h1>
                    {/* <p>{category.description}</p> */}
                    <div className="category-follow">
                        <button className="follow-category-button">Follow</button>
                        <p>19k followers</p>
                    </div>
                </div>
                <ul className="category-stories">{storyList}</ul>
            </div>
        );
    }
}

export default StoryIndex;