import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { ReviewData } from "../ReviewCard/types";
import { REVIEWS_API } from "../../utils/defaults";

interface ReviewCardsProps {
  projectId: string;
  sliderWidth?: number;
}

const ReviewCardsSlider = ({
  projectId,
  sliderWidth = 600,
}: ReviewCardsProps) => {
  const [data, setData] = useState<ReviewData[][]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${REVIEWS_API}/${projectId}/status`);
        const resJson = await res.json();

        if (!resJson.data?.length) {
          setData([]);
          return;
        }

        const chunkedData = [];
        for (let i = 0; i < resJson.data.length; i += 3) {
          chunkedData.push(resJson.data.slice(i, i + 3));
        }

        setData(chunkedData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="fr">
      <div className="fr-flex fr-flex-col">
        <div
          className="!fr-carousel fr-rounded-box fr-w-[100vw]"
          style={{ maxWidth: `${sliderWidth}px` }}
        >
          {isLoading ? (
            <div className="fr-flex fr-justify-center fr-items-center fr-w-full fr-py-4">
              <span className="!fr-loading !fr-loading-dots !fr-loading-lg !fr-bg-brandDarkBlue fr-inline-block fr-mx-auto"></span>
            </div>
          ) : !!data.length ? (
            data.map((reviewChunk, index) => (
              <div
                key={index}
                id={`slide-review-${index}`}
                className="!fr-carousel-item fr-relative fr-w-full fr-flex fr-justify-start fr-items-center fr-flex-col fr-gap-6 fr-py-4"
              >
                {reviewChunk?.map((review) => (
                  <ReviewCard
                    key={review._id}
                    data={review}
                    sliderWidth={sliderWidth}
                  />
                ))}
              </div>
            ))
          ) : (
            <div className="fr-flex fr-justify-center fr-items-center fr-w-full fr-py-4">
              <span className="fr-text-gray-500">No reviews yet</span>
            </div>
          )}
        </div>
        {!isLoading && data.length > 1 && (
          <div className="fr-flex fr-w-full fr-justify-center fr-gap-2 fr-py-2">
            {data.map((_, index) => (
              <a
                href={`#slide-review-${index}`}
                className="!fr-btn !fr-btn-xs"
                key={`slide-review-${index}`}
              >
                {index + 1}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCardsSlider;
