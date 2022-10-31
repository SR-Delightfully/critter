import { createGlobalStyle } from "styled-components";
import { COLORS } from '../accessories/constants';

// This is where we'll hold our 'app-wide' styled so we can use them inside of our App.js
// Essentially, this is where you'll want to reset you css styles, set global fonts, etc. etc.
export default createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    html, body {
        max-width: 100vw;
    }


    /* http://meyerweb.com/eric/tools/css/reset/
        v2.0 | 20110126
        License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    body {
        background: ${COLORS.DesaturatedGreen};
        color: ${COLORS.text};
        font-family: sans-serif;
        font-size:24px;
    }

    a {
        color: ${COLORS.text};
        text-decoration: none;
    }
    a:hover {
        color: ${COLORS.textActive}
    }
    h1 {
        font-family: sans-serif;
        font-size: 24px;
    }
    h2 {
        font-family: sans-serif;
        font-size: 16px;
        font-weight: lighter;
    }
`;
