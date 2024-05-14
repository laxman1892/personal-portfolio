export default function About() {
    return (
      <div className="pt-16 px-6 md:px-0 md:pt-20 md:w-[742px] lg:w-[800px] md:my-0 md:mx-auto">
        <h1 className="text-2xl font-extrabold md:text-center">ABOUT ME</h1>
        <div className="content md:flex md:justify-between">
          <div className="left-content w-3/5">
            <p className="text-xl font-bold mt-4">Get to know me!</p>
            <div id="description" className="text-justify mt-4">
              <p>
                I'm a Frontend Focused Web Developer building and managing the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                Projects section.
              </p>{" "}
              <br />
              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me on
                my Linkedin and Instagram where I post useful content related to
                Web Development and Programming.
              </p>{" "}
              <br />
              <p>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>
            </div>
          </div>
          <div id="right-content skills w-2/5">
            <h1 className="mt-4 text-xl font-bold">Skills</h1>
          </div>
        </div>
      </div>
    );
  }
  