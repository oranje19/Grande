import React from "react";

class CreateParentComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment;

        this.handleSubmitComment = this.handleSubmitComment.bind(this)
        
    }

    updateComment(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmitComment(e) {
        e.preventDefault();
        const that = this;
        this.props.createComment(this.state)
            .then(() => {
                that.props.history.push(`/stories/${that.props.story.id}`)
            })
    }

    render() {
        const { story } = this.props;
        // console.log(this.props.history)
        // console.log("this is the history")
        return (
            <div className="comments">
                <h1>Showing comments for:</h1>
                <div className="comment-container">
                    <div className="comment-top">
                        <div className="comment-author">{story.author[0]}</div>
                        <div className="comment-info">{story.author}</div>
                    </div>
                    <div className="comment-body">{story.title}</div>
                </div>

                <form className="new-comment" onSubmit={this.handleSubmitComment}>
                    <textarea
                        cols="1"
                        rows="3"
                        className="new-comment-body"
                        onChange={this.updateComment("body")}
                    ></textarea>
                    <input className="submit-comment-button" type="submit" value="Publish" />
                </form>
            </div>
        )
    }

}

export default CreateParentComment;