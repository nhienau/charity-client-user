import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Home from "@/pages/Home";
import Campaign from "@/pages/Campaign";
import PageNotFound from "@/pages/PageNotFound";
import Layout from "@/ui/Layout";
import ErrorFallback from "./ui/ErrorFallback";
import Login from "./pages/Login";
import AuthLayout from "./ui/AuthLayout";
import DonationHistory from "@/pages/DonationHistory";
import ProtectedRoute from "./ui/ProtectedRoute";
import DonationSearch from "@/pages/DonationSearch";
import Profile from "@/pages/Profile";
import Page from "./ui/Page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} ErrorBoundary={ErrorFallback}>
      <Route
        path="/"
        element={
          <Page>
            <Home />
          </Page>
        }
      />
      <Route path="/campaign/:campaignId" element={<Campaign />} />
      <Route
        path="/donation-search"
        element={
          <Page title="Tra cứu quyên góp">
            <DonationSearch />
          </Page>
        }
      />
      <Route element={<AuthLayout />}>
        <Route
          path="/login"
          element={
            <Page title="Đăng nhập">
              <Login />
            </Page>
          }
        />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/profile"
          element={
            <Page title="Cá nhân">
              <Profile />
            </Page>
          }
        />
        <Route
          path="/history"
          element={
            <Page title="Lịch sử quyên góp">
              <DonationHistory />
            </Page>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Page title="Lỗi">
            <PageNotFound />
          </Page>
        }
      />
    </Route>,
  ),
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
  // queryCache: new QueryCache({
  //   onError: handleQueryError,
  // }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          className: "max-w-lg py-4 px-6 bg-white text-slate-700 text-base",
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
