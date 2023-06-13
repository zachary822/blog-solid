// @refresh reload
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Footer from "./components/Footer";
import "./root.css";
import Sidebar from "./components/Sidebar";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <Html lang="en" data-theme="cupcake">
      <Head>
        <Title>Thoughtbank Blog</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="Thoughtbank Blog" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
              <nav class="navbar bg-primary text-primary-content">
                <div class="flex-1">
                  <A class="btn btn-ghost normal-case text-xl" href="/">
                    Thoughtbank
                  </A>
                </div>
                <div class="flex-none gap-2 mr-1">
                  <div class="form-control">
                    <input
                      type="text"
                      placeholder="Search"
                      class="input input-bordered w-24 md:w-auto"
                    />
                  </div>
                </div>
              </nav>
              <main class="md:container md:mx-auto flex flex-wrap justify-center py-6">
                <section class="w-full md:w-fit px-3">
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </section>
                <aside class="w-full md:w-fit px-3">
                  <Sidebar />
                </aside>
              </main>
              <Footer />
            </QueryClientProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
