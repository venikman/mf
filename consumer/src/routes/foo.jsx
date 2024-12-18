import { lazy, Suspense } from "react";

const RemoteFoo = lazy(async () => import("remote/Foo"));

export default () => {
  return (
    <Suspense fallback="Loading...">
      <RemoteFoo />
    </Suspense>
  );
};
