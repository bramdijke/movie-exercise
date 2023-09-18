import { useFormik } from "formik";
import { useLocation } from "react-router-dom";

const ReviewForm  = () => {
    const location = useLocation();
    const movieId = location.pathname.split("/").pop();

    const formik = useFormik({
        initialValues: {
            movie_id: movieId,
            review_name: "",
            review_rating: "",
            review_message: "",
        },
        onSubmit: (values) => {
            const existingReviewsJSON = localStorage.getItem("reviews");
            const existingReviews = existingReviewsJSON ? JSON.parse(existingReviewsJSON) : [];
            
            existingReviews.push(values);
            localStorage.setItem("reviews", JSON.stringify(existingReviews));
        }
    })

    return (
        <div className="px-4">
            <h2 className="text-3xl font-extrabold">Write a review</h2>
            <div className="pt-4">
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                <div>
                <label>Name</label>
                <input 
                    className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-3 mt-1 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm "
                    id="name"
                    name="review_name"
                    type="text"
                    placeholder="Enter your name here"
                    value={formik.values.review_name}
                    onChange={formik.handleChange}
                    ></input>
                </div>
                <div>
                <label>Rating</label>
                <input 
                    className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-3 mt-1 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm "
                    id="rating"
                    name="review_rating"
                    type="number"
                    placeholder="Enter your rating here"
                    value={formik.values.review_rating}
                    onChange={formik.handleChange}
                    max="10"
                    ></input>                </div>
                <div>
                <label>Message</label>
                <input 
                    className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-3 mt-1 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm "
                    id="message"
                    name="review_message"
                    type="text"
                    placeholder="Write your message here"
                    value={formik.values.review_message}
                    onChange={formik.handleChange}
                    ></input>                </div>
                <button
                        className="hover:text-black bg-gray-200 p-3 rounded"
                        type="submit"
                      >
                        Submit review
                      </button>
               </form>
            </div>
        </div>
    );
};

export default ReviewForm;