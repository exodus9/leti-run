import Navigation from "@/components/Navigation";
import LetiRunGame from "@/components/LetiRunGame";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-[600px] flex flex-col">
        <Navigation />
        <main className="flex-1">
          <LetiRunGame />
        </main>
      </div>
    </div>
  );
};

export default Index;
