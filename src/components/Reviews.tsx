interface ReviewsProps {
    movie_id: any;
}

const Reviews = ({ movie_id }: ReviewsProps) => {
    const reviewsLS = localStorage.getItem("reviews");
    const reviews = reviewsLS ? JSON.parse(reviewsLS) : [];
    const filteredReviews = reviews.filter((review: any, IMDBMovie: any) => review.movie_id === movie_id);
    const totalReviews = filteredReviews.length;

    return (
        <div className="px-4 py-16">
            <h2 className="text-3xl font-extrabold pb-4">Total of {`${totalReviews}`} reviews</h2>
            <div className="flex flex-col gap-6">
            {filteredReviews.map((review: any, index: number) => (
                <div key={index}className="rounded border-gray-200 border-2">
                    <div className="flex gap-2 items-center bg-gray-100">
                        <h3 className="text-xl font-bold m-3">{review.review_name}</h3>
                        <p>{review.review_rating}/10</p>
                    </div>
                    <div>
                        <p className="p-3">{review.review_message}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;