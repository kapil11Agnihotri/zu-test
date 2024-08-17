import SideBar from "@/components/SideBar";
import ExploreCourseWorkSection from "@/components/ExploreCourseWorkSection";
import MyCourseWorkSection from "@/components/MyCourseWorkSection";
import RightSideBar from "@/components/RightSideBar";
import HeroSeciton from "@/components/HeroSeciton";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div
        className="p-3 m-1 sticky top-0"
        style={{
          backgroundColor: "#fff",
          width: "70px",
          height: "98.5dvh",
          borderRadius: "20px",
        }}
      >
        <SideBar />
      </div>
      <div className="container mx-auto p-10 mb:p-1">
        <div>
          <HeroSeciton />
        </div>
        <div className="mb-8">
          <MyCourseWorkSection />
        </div>
        <div>
          <ExploreCourseWorkSection />
        </div>
      </div>
      <div
        className="p-3 m-1 sticky top-0"
        style={{
          maxWidth: "100px",
          height: "98.5dvh",
          borderRadius: "20px",
        }}
      >
        <RightSideBar />
      </div>
    </div>
  );
}
