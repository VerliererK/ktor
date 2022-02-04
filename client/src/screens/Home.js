import React, { lazy, Suspense } from "react";

const Downloads = lazy(() => import("../screens/Downloads"));

export default function Home() {

  return (
    <>
      <main>
        <div className="content">
          <Suspense fallback={<div className="div-loading" />}>
            {<Downloads />}
          </Suspense>
        </div>
      </main>
    </>
  );
}
