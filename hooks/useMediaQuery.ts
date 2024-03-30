import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const isClient = typeof window === "object"; // Check if window is defined

  const [matches, setMatches] = useState(isClient ? window.matchMedia(query).matches : false);

  useEffect(() => {
    if (!isClient) {
      return; // Bail out if running on the server
    }

    const mediaQueryList = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", updateMatches);
    updateMatches(); // Initial check

    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [query, isClient]);

  return matches;
};
