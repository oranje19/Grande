import React from "react";

class CreateParentComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment

        this.handleSubmitComment = this.handleSubmitComment.bind(this)
        
    }

    updateComment(field) {
        return (e) => this.setState({
            [field]: <e className="target value"></e>
        })
    }

    handleSubmitComment(e) {
        e.preventDefault();
        const that = this;
        this.props.createComment(this.state)
            .then(() => {
                that.props.history.push(`/journals/${that.props.story.id}`)
            })
    }

    render() {
        const { story } = this.props;

        return (
            <div className>

            </div>
        )
    }


}