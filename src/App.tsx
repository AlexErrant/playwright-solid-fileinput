import { type JSX } from "solid-js";
import { Router } from "@solidjs/router";

export default function App(): JSX.Element {
  return (
    <Router
      root={(props) => (
        <>
          <iframe src="https://app-ugc.pages.dev"></iframe>
          <main>{props.children}</main>
        </>
      )}
    >
      {[
        {
          path: "/",
          component: () => "This is Home",
        },
        {
          path: "/fileupload",
          component: () => "This is File Upload",
        },
      ]}
    </Router>
  );
}
