import PropTypes from 'prop-types';

export const FirstProp = ({title, subTitle, number}) => {
    return(
        <>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <h3>{number}</h3>
        </>
    );
}

FirstProp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}

FirstProp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    number: 'No hay numero'
}