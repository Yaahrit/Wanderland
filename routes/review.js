const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const {
  validateReview,
  isLoggedIn,
  isreviewAuthor,
} = require("../middleware.js");
const Listing = require("../models/listing.js");

const ReviewController = require("../controller/reviews.js");

// Post route here
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(ReviewController.CreateReview)
);

// Delete Review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isreviewAuthor,
  wrapAsync(ReviewController.deleteReview)
);

module.exports = router;
