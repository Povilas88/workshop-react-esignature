/* eslint-disable react/prop-types */
function Title({ text }) {
    return <h1>{!text ? 'Your Signature' : text}</h1>;
}

export default Title;
