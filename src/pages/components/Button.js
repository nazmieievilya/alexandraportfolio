import styled from 'styled-components'
import {Link} from 'gatsby'


const Button = styled(Link)`

    background: ${({primary}) => (primary ? 'white' : 'black' )};
    white-space: nowrap;
    padding: ${ ({big}) => (big ? '16px 40px' : '16px 32px' ) };
    color:  #fff;
    font-size: ${ ({big}) => (big ? '20px' : '16px' ) };
    outline: none;
    border: none;
    min-width: 100px;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({round}) => (round ? '50px' : 'none') };

    &:hover {
        background: ${({primary}) => (primary ? 'black' : 'white' )};
        color:  black;
    }

`

export default Button
