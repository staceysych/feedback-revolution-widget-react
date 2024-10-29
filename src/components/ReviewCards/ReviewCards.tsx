import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { ReviewData } from "../ReviewCard/types";
import { REVIEWS_API } from "../../utils/defaults";

interface ReviewCardsProps {
  projectId: string;
}

const ReviewCards = ({ projectId }: ReviewCardsProps) => {
  const [data, setData] = useState<ReviewData[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(`${REVIEWS_API}/${projectId}`);
      const resJson = await res.json();
      setData(resJson.data);
    };

    fetchReviews();
  }, []);

  return (
    <div>
      {data?.map((review) => (
        <ReviewCard key={review._id} data={review} />
      ))}
    </div>
  );
};

export default ReviewCards;
