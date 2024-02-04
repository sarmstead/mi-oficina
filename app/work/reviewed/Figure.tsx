import Stem from "~/work/reviewed/Stem";
import Arrow from "~/work/reviewed/Arrow";

const Figure = () => (
  <figure className="mx-auto max-w-[954px] pb-16 px-5 md:px-10 lg:px-0">
    <figcaption className="uppercase tracking-wider mb-4">
      <strong>Figure 1 -</strong>&nbsp;Data Flow Diagram
    </figcaption>
    <div className="w-40 border-t-black border mb-10"></div>
    <section className="flex flex-col justify-center lg:flex-row">
      <div className="flex flex-col lg:flex-row items-center gap-2 lg:mr-4">
        <div className="flex flex-col items-center gap-2">
          <p className="uppercase tracking-wider text-center">
            Content CMS
            <br />
            (Reviewed Team)
          </p>
          <div className="w-24 h-20 bg-figureGray"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-2 mb-2 lg:mb-0 lg:mt-14 lg:-ml-7">
          <div className="lg:rotate-90 lg:w-7 lg:flex lg:justify-center">
            <Stem />
          </div>
          <p className="uppercase tracking-wider text-center lg:w-max">
            Form Data
          </p>
          <div className="lg:-rotate-90">
            <Arrow />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <p className="uppercase tracking-wider text-center">
            Front End
            <br />
            (User-Facing)
          </p>
          <div className="w-[358px] max-w-full h-72 bg-figureGray flex items-center justify-center">
            <div className="bg-white w-[272px] max-w-full h-[212px] flex items-center justify-center">
              <p className="uppercase tracking-wider text-center">
                Newsletter
                <br />
                (Signup Form)
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:mt-14 lg:-mr-3">
          <div className="lg:rotate-90 lg:w-7 lg:flex lg:justify-center">
            <Stem />
          </div>
          <p className="uppercase tracking-wider text-center lg:w-max">
            User Data
          </p>
          <div className="lg:-rotate-90 lg:w-7 lg:flex lg:justify-center">
            <Arrow />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 lg:min-h-[136px] lg:justify-end">
          <p className="uppercase tracking-wider text-center">Email Service</p>
          <div className="w-24 h-20 bg-figureGray"></div>
        </div>
      </div>
    </section>
  </figure>
);

export default Figure;
