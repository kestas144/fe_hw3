import React from 'react';
import {connect} from 'react-redux';
import {toggleCards} from '../actions';
import {getGenreId, getGenres, getMostPopularMovies, getMoviesByGenre} from '../thunks';
import Card from './Card';
import {getImageUrl} from '../config';

class App extends React.Component {
    componentDidMount() {
        this.props.onGetMostPopularMovies();
        this.props.onGetGenres();
    }


    renderElement(genreId, genreName) {
        if (this.props.genreId !== genreId) {
            return <button className={"genre"}
                           key={genreId}
                           onClick={
                               (e) => {
                                   this.props.onGetMoviesByGenre(genreId);
                                   this.props.onSetGenreId(genreId)
                               }}>
                {genreName}
            </button>
        } else {
            return <button
                className={"genre"}
                disabled={true}
            >
                {genreName}
            </button>
        }
    }

    render() {
        return (
            <div className="container">
                <header>
                    <button
                        className={"genre"}
                        onClick={(e) => this.props.onToggleCards(!this.props.showCards)}
                    >
                        Hide movies
                    </button>
                    <button
                        className={"genre"}
                        onClick={(e) => {
                            this.props.onGetMostPopularMovies();
                            this.props.onSetGenreId()
                        }}
                    >
                        Most Popular
                    </button>
                    {this.props.genresList.map(genre => (
                        this.renderElement(genre.id, genre.name)
                    ))}
                </header>

                {this.props.showCards ? (
                    <div className='cards'>
                        {this.props.popularMovies.map(card => (
                            <Card
                                id={card.id}
                                backgroundImage={getImageUrl(card.backdrop_path)}
                                date={card.release_date}
                                rating={card.vote_average}
                                votes={card.vote_count}
                                description={card.overview}
                                title={card.original_title}
                            />
                        ))}
                    </div>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showCards: state.cards.showCards,
    popularMovies: state.cards.moviesList,
    genresList: state.cards.genresList,
    genreId: state.cards.genreId,
});

const mapDispatchToProps = (dispatch) => ({
    onToggleCards: (shouldShow) => dispatch(toggleCards(shouldShow)),
    onGetGenres: () => dispatch(getGenres()),
    onSetGenreId: (id) => dispatch(getGenreId(id)),
    onGetMostPopularMovies: () => dispatch(getMostPopularMovies()),
    onGetMoviesByGenre: (id) => dispatch(getMoviesByGenre(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
