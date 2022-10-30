import styled from 'styled-components';
import PopoverSongCover from '../components/PopoverSongCover';
import { PlaylistTitle, PlaylistInfo,  } from './DashboardItems.styled';
import { CoverPlaylistMain } from './DashboardItems.styled';


// export const PlaylistContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 70vh;
//   width: 100%;
// `

// export const  = styled.`
  
// `;

export const PlaylistColumn = styled.section `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  grid-area: playlist;
  margin: 0 0 0 1rem;

  &.Category__row {
    width: 100%;
  }
`
export const PlaylistColumnSongs = styled.section`
width: 100%;
grid-area: songs;
  margin: 0 1rem 0 0;

`;


export const PlaylistContainer = styled.main`
height: 100%;
  display: grid;
  grid: 
  'playlist songs' 100%/
    35%     auto
  ;
  gap: 1rem;

  &.category__container {
    grid:
    'playlist' 30%
    'songs' auto/
    100%
  }
`


export const PlaylistCoverSm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  height: 4rem;
  border-radius: .3rem;
  background-color: #8D0E0E;
  margin: 0 0 1rem 1rem;
  padding: .5rem .5rem ;
  font-size: .8rem;
  cursor: pointer;
  
  ${PlaylistTitle} {
    font-size: 1.4rem;
    color: white;
  }

  ${PlaylistInfo} {
    font-size: 1rem;
    color: white;
  }


`

export const PlaylistSong = styled.div`
  height: 2rem;
  width: 90%;
  display: flex;
  /* border-bottom: 1px solid #fff; */
  color: #fff;
  align-items: center;
  font-size: 1.2rem;
  padding:0 0 1.5rem 0;
  margin: 2rem 0;
`

export const PlaylistArticle = styled.article`
position: relative;
  display: flex;
  border-bottom: 1px solid #fff;
  padding: 1.5rem 0 1.5rem 0;

  &:hover {
    background-color: #0d1423;
  }
`;

export const PopoverPlaylist = styled(PopoverSongCover)`
  
`;