import { RiPlayListFill, RiStarFill, RiHome5Fill, RiAppsFill, RiUpload2Fill } from "react-icons/ri";
import styled from "styled-components";

export const IconHome = styled(RiHome5Fill)`
    color: #EF5656;
    /* margin: 0 1.2rem; */
    font-size: 2rem;

    @media(min-width: 960px) {
        margin: 0 0.5rem;
        font-size: 1.3rem
  }
`

export const IconPlaylist = styled(RiPlayListFill)`
    /* margin: 0 1.2rem; */
    font-size: 2rem;

    @media(min-width: 960px) {
        margin: 0 0.5rem;
        font-size: 1.3rem
    }
`

export const IconFavorites = styled(RiStarFill)`
    /* margin: 0 1.2rem; */
    font-size: 2rem;

    @media(min-width: 960px) {
        margin: 0 0.5rem;
        font-size: 1.3rem
    }
`

export const IconCategories = styled(RiAppsFill)`
    /* margin: 0 1.2rem; */
    font-size: 2rem;

    @media(min-width: 960px) {
        margin: 0 0.5rem;
        font-size: 1.3rem
    }
    
`

export const IconUpload = styled(RiUpload2Fill)` 
    color: #56C1EF;
    font-size: 2rem;

@media(min-width: 960px) {
    margin: 0 10px 0 0;
    color: white;
    font-size: 1.3rem
    }
`;