import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "/Users/vipinyadav/Desktop/my-food-app/src/components/__tests__/mokes/resCardMoke.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});

// it("should render RestaurantCard component with Promoted label", () => {
//   render(<withHighRatedLabel resData={MOCK_DATA} />);

//   const rating = MOCK_DATA?.info?.avgRating;

//   if (rating >= 4) {
//     const withPromatedLabel = screen.getByText("Rating is greater than 4");

//     expect(withPromatedLabel).toBeInTheDocument();
//   }else {
//     // Optional: ensure it's not rendered
//     expect(screen.queryByText("Rating is greater than 4")).toBeNull();
//   }
// });
