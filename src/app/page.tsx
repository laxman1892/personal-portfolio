import Header from "./Header";

export default function Home() {
  return (
    <div className="h-screen py-[200px] text-center md:flex md:flex-col md:justify-center md:text-left md:my-0 md:mx-auto md:w-[742px] md:py-0 lg:w-[800px]">
      <h1 className="leading-[1]">HI, MY NAME IS</h1>
      <h1 className="text-8xl font-bold leading-[1]">LAXMAN RIJAL</h1>
      <h1 className="text-5xl leading-[1.2] font-bold">I BUILD THINGS FOR THE WEB.</h1>
      <h1 className="leading-[1.2] mt-10">I&apos;m a full stack developer specializing in building and designing beautiful web experiences.</h1>
    </div>
  );
}
