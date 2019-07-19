import { combineReducers } from 'redux';
import { SONG_SELECTED } from '../actions';

const songsReducer = () => {
    return [
        { title: 'Smooth Criminal', duration: '4:17' },
        { title: 'Earth Song', duration: '6:46' },
        { title: 'Keep the faith', duration: '5:58' },
        { title: 'Heal the world', duration: '6:25' },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === SONG_SELECTED) {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
