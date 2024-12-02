import { useFeatureFlagEnabled } from "posthog-js/react";

export default function Home() {
  const flagEnabled = useFeatureFlagEnabled("new-landing-page");
  if (flagEnabled) {
    return <h1>New Landing Page</h1>;
  }
  return <h1>Home Page</h1>;
}
