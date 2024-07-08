import { FaStar, FaStarHalf } from "react-icons/fa";

const GoldStars = ({ numberOfStars }) => {
    const stars = [];
    const fullStars = Math.floor(numberOfStars);
    const hasHalfStar = numberOfStars % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-goldBg" />);
    }

    if (hasHalfStar) {
        stars.push(<FaStarHalf key="half" className="text-goldBg" />);
    }
    return (
        <div className="flex justify-center">
            {stars}
        </div>
    )
}

export default GoldStars