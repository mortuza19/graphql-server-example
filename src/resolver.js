import _db from "./_db.js";
const games = () => {
    return _db.games;
};
const game = ( parent, args, context ) => {
    return _db.games.find( game => game.id === args.id );
};
const authors = () => {
    return _db.authors;
};
const author = ( parent, args, context ) => {
    return _db.authors.find( author => author.id === args.id );
};
const reviews = () => {
    return _db.reviews;
};
const review = ( parent, args, context ) => {
    return _db.reviews.find( review => review.id === args.id );
};

const nestedReviews = ( parent, args, context ) => {
    return _db.reviews.filter( review => review.game_id === parent.id );
}

const nestedGame = ( parent, args, context ) => {
    return _db.games.find( game => game.id === parent.game_id );
}

const nestedAuthor = ( parent, args, context ) => {
    return _db.authors.find( author => author.id === parent.author_id );
}

const deleteGame = ( parent, args, context ) => {
    _db.games = _db.games.filter( game => game.id !== args.id );
    return _db.games;
}
const addGame = ( parent, args, context ) => {
    const newGame = {
        ...args.game,
        id: Math.floor( Math.random() * 1000 ).toString()
    }
    _db.games.push( newGame );
    return newGame;
}
const updateGame = ( parent, args, context ) => {
    const newGames = _db.games.map( game => {
        if( game.id === args.id ) {
            game.title = args.game.title;
            game.platform = args.game.platform;
        }
        return game;
    } );
    return newGames;
}
export const resolvers =  ({ Query: { 
    games,
    game,
    authors,
    author,
    reviews,
    review
}, Game: {
    reviews: nestedReviews
}, Author: {
    reviews: nestedReviews
}, Review: {
    game: nestedGame,
    author: nestedAuthor
}, Mutation: {
    deleteGame,
    addGame,
    updateGame,
} });
