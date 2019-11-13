import React from 'react';
import {connect} from "react-redux";
import {likeChange} from "../thunks";


class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            showDescription: true,
        };
    }

    checkMovieTitle() {
        if (this.props.likeList.find(movieTitle => (movieTitle === this.props.title))) {
            return <i className={'fa fa-heart'}
                      onClick={(e) => (this.props.onLikeClick(this.props.title, this.props.likeList))}/>
        } else {
            return <i className={'fa fa-heart-o'}
                      onClick={(e) => (this.props.onLikeClick(this.props.title, this.props.likeList))}/>
        }
    }

render()
{
    const {showDescription} = this.state;
    const {title, backgroundImage, date, rating, votes, description} = this.props;
    return (
        <div className="card">
            <div
                className="card__image"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}/>

            <div className="card__title">
                {title}
            </div>

            <div className="card__like">
                {this.checkMovieTitle()}
            </div>

            <div className="card__subtitle">
                <span>{date}</span>
                <span>{rating} ({votes} votes)</span>
            </div>

            <div className="card-info">
                <div className="card-info__header">Summary</div>

                <button onClick={() => {
                    this.setState({showDescription: !showDescription})
                }}>Toggle
                </button>
                <div className="card-info__description">
                    {showDescription ? description : null}
                </div>
            </div>
        </div>
    );
}
}
const mapStateToProps = (state) => ({
    likeList: state.likeCard.likeList,
});

const mapDispatchToProps = (dispatch) => ({
    onLikeClick: (title, likeList) => dispatch(likeChange(title, likeList)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card);
