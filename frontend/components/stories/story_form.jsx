import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.story;


    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    updateSelect() {
        return e => this.setState({
            category_id: parseInt(e.currentTarget.value)
        });
    }

    handleCreate(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append("story[title]", this.state.title);
        formData.append("story[body]", this.state.body);
        formData.append("story[category_id]", this.state.category_id);

        $.ajax({
            url: '/api/stories',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
        }).then(() => 
            this.props.history.push(`/users/${this.props.currentUserId}/stories`)
        );

    }

    handleUpdate(e) {
        e.preventDefault();
        const newStory = {
            id: this.state.id,
            title: this.state.title,
            body: this.state.body,
            category_id: this.state.category_id
        };
        this.props.updateStory(newStory).then(() => {
            this.props.history.push(`/users/${this.props.currentUserId}/stories`)
        });
    }

    render() {
        const { buttonText, currentUserId, categories } = this.props;
        const backButton = buttonText !== "Publish"
            ? (
                <Link className="back-button" to={`/users/${currentUserId}/stories`}>
                    Back to stories  
                </Link>
            ) : null;

        const categoryList = categories.map((category) => (
            <option key={category.id} value={`${category.id}`}>
                {category.title}
            </option>
        ));

        const action = buttonText === "Publish" ? this.handleCreate : this.handleUpdate;

        let selected = this.state.category_id.toString();

        return (
            <div>
                <form className="story-form" onSubmit={action}>
                    <div className="story-button">
                        {backButton}
                        <input type="submit" className="publish-button" value={buttonText}/>
                    </div>
                    <input 
                        type="text"
                        className="story-form-title"
                        placeholder="Title"
                        onChange={this.update("title")}
                        value={this.state.title}
                    />

                    <textarea 
                        className="story-form-body"
                        cols="1"
                        rows="30"
                        placeholder="Tell your story..."
                        value={this.state.body}
                    >
                    </textarea>

                    <label className="select-category">Select category</label>
                    <select 
                        className="select-category-list"
                        value={selected}
                        onChange={this.updateSelect()}
                    >{categoryList}
                    </select>
                </form>
            </div>
        )

    }

}

export default withRouter(StoryForm);