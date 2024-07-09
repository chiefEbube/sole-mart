import { FaStar, FaStarHalf } from "react-icons/fa";

const GoldStars = ({ numberOfStars, className }) => {
    const stars = [];
    const fullStars = Math.floor(numberOfStars);
    const hasHalfStar = numberOfStars % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-[#FFC633]" />);
    }

    if (hasHalfStar) {
        stars.push(<FaStarHalf key="half" className="text-[#FFC633]" />);
    }
    return (
        <div className={className}>
            {stars}
        </div>
    )
}

export default GoldStars