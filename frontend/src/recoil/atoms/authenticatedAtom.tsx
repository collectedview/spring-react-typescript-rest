// React -%- ////

// Packages -%- ////
import { atom } from 'recoil'

// MUI -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export const authenticatedState = atom({
    key: 'authenticated', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
})

// System -%- ////
