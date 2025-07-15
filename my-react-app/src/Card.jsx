
import propTypes from 'prop-types'

function Card({ name = "Khem", age = 51, occupation = "Manager", isMarried = false, profileImage = "https://placehold.co/200x200" }) { //props destructuing with default values
    let marriedStatus;
    marriedStatus = isMarried ? <h3 className="card-status">Married</h3> : undefined;
    return (
        <div className="card">
            <img className="card-image" src={profileImage} alt="biplav's image" />
            {marriedStatus}
            <h2 className="card-title">{name} Paudel</h2>
            <p className="card-description">I am a {occupation}. I am {age} years old.</p>
        </div>
    );
}

Card.propTypes = {
    name: propTypes.string,
    occupation: propTypes.string,
    age: propTypes.number,
    profileImage: propTypes.string,
    isMarried: propTypes.bool,
}

export default Card