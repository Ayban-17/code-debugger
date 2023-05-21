import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen p-5 border-slate-950 bg-indigo-950 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
