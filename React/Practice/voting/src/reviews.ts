export const fakeReviews = [
  {
    id: 1,
    title: "Refactor authentication flow",
    description:
      "The login logic works, but the component is doing too much. Consider moving API calls and token handling into a custom hook or service layer.",
    upvotes: 12,
    downvotes: 2,
  },
  {
    id: 2,
    title: "Improve button accessibility",
    description:
      "Some icon-only buttons are missing aria-label attributes. Adding them will make the UI more accessible for screen reader users.",
    upvotes: 18,
    downvotes: 1,
  },
  {
    id: 3,
    title: "Optimize large list rendering",
    description:
      "Rendering all items at once may cause performance issues with bigger datasets. Virtualization could help here.",
    upvotes: 25,
    downvotes: 4,
  },
  {
    id: 4,
    title: "Clean up unused imports",
    description:
      "There are several unused imports across the file. Removing them will improve readability and reduce noise.",
    upvotes: 7,
    downvotes: 0,
  },
  {
    id: 5,
    title: "Fix inconsistent naming",
    description:
      "Variable names switch between camelCase and snake_case. Sticking to one convention will make the codebase easier to maintain.",
    upvotes: 10,
    downvotes: 3,
  },
  {
    id: 6,
    title: "Add loading state for API call",
    description:
      "The UI feels unresponsive while data is being fetched. A loading spinner or skeleton state would improve user experience.",
    upvotes: 20,
    downvotes: 2,
  },
  {
    id: 7,
    title: "Break form into smaller components",
    description:
      "This form component is getting large and hard to manage. Splitting sections into reusable child components would help.",
    upvotes: 14,
    downvotes: 5,
  },
  {
    id: 8,
    title: "Handle API errors more clearly",
    description:
      "Error handling is too generic right now. Showing more specific feedback would help users understand what went wrong.",
    upvotes: 16,
    downvotes: 1,
  },
  {
    id: 9,
    title: "Use memoization for expensive calculations",
    description:
      "This derived value recalculates on every render. Wrapping it in useMemo may prevent unnecessary work.",
    upvotes: 9,
    downvotes: 2,
  },
  {
    id: 10,
    title: "Improve mobile responsiveness",
    description:
      "The layout breaks on smaller screens, especially around the review card actions. Some responsive spacing adjustments are needed.",
    upvotes: 22,
    downvotes: 3,
  },
];