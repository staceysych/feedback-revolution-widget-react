import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { ReviewData } from "../ReviewCard/types";
import { REVIEWS_API } from "../../utils/defaults";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ReviewCardsProps {
  projectId: string;
  sliderWidth?: number;
}

const ReviewCardsSlider = ({
  projectId,
  sliderWidth = 600,
}: ReviewCardsProps) => {
  const [data, setData] = useState<ReviewData[][]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(`${REVIEWS_API}/${projectId}`);
      const resJson = await res.json();

      const chunkedData = [];
      for (let i = 0; i < resJson.data.length; i += 3) {
        chunkedData.push(resJson.data.slice(i, i + 3));
      }

      setData(chunkedData);
    };

    fetchReviews();
  }, [projectId]);

  return (
    <div className="fr">
      <div className="fr-flex">
        <div
          className="!fr-carousel fr-rounded-box fr-w-[100vw]"
          style={{ maxWidth: `${sliderWidth}px` }}
        >
          {!!data.length ? (
            data.map((reviewChunk, index) => (
              <div
                key={index}
                id={`slide${index}`}
                className="!fr-carousel-item fr-relative fr-w-full fr-flex fr-justify-start fr-items-center fr-flex-col fr-gap-6 fr-py-4"
              >
                {!!index && (
                  <a
                    href={`#slide${index - 1}`}
                    className="fr-absolute fr-left-0 fr-top-1/2 fr-transform fr--translate-y-1/2 fr-p-2 fr-cursor-pointer fr-bg-brandWhite hover:fr-bg-gray-100 fr-rounded-full fr-transition-all fr-duration-300"
                  >
                    <ChevronLeftIcon className="fr-text-brandDarkBlue fr-size-6" />
                  </a>
                )}
                {reviewChunk?.map((review) => (
                  <ReviewCard
                    key={review._id}
                    data={review}
                    sliderWidth={sliderWidth}
                  />
                ))}
                {index !== data.length - 1 && (
                  <a
                    href={`#slide${index + 1}`}
                    className="fr-absolute fr-right-0 fr-top-1/2 fr-transform fr--translate-y-1/2 fr-p-2 fr-cursor-pointer fr-bg-brandWhite hover:fr-bg-gray-100 fr-rounded-full fr-transition-all fr-duration-300"
                  >
                    <ChevronRightIcon className="fr-text-brandDarkBlue fr-size-6" />
                  </a>
                )}
              </div>
            ))
          ) : (
            <span className="!fr-loading !fr-loading-dots !fr-loading-lg !fr-bg-brandDarkBlue fr-inline-block fr-mx-auto"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCardsSlider;
