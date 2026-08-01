export default function ResumePage() {
  return (
    <main className="min-h-screen bg-blue-100 text-white px-8">
      
      <h1 className="text-blue-900 text-5xl font-bold font-mono mb-10 mt-10">
	Activities: Applying Knowledge and Growing Through Service 
      </h1>

      <section className="mb-12 flex gap-60">

        <div className="w-full pr-8">

          <h2 className="text-blue-900 text-4xl font-semibold font-mono leading-loose">
            AwsomeMath Summer Program
          </h2>

          <p className="text-justify text-blue-800 text-3xl font-normal font-mono leading-loose">
            Attending the AwesomeMath Summer Program at 2024 was a valuable opportunity to challenge myself beyond the classroom. Learning math skills from teachers online alongside passionate students from different backgrounds taught me not only new problem-solving techniques, but also the importance of curiosity, and perseverance.
          </p>

        </div>



        <div className="flex flex-col w-[650px] h-[900px] ml-auto shrink-0">

          <iframe
            src="/pdfs/Math1.pdf#zoom=page-fit"
            className="
              w-full
	      h-full
              rounded-lg
              border
            "
          />

	  <section className="h-[5vh]" />

          <iframe
            src="/pdfs/Math2.pdf#zoom=page-fit"
            className="
              w-full
	      h-full
              rounded-lg
              border
            "
          />

        </div>

     </section>

      <section className="h-[5vh]" />

      <section className="mb-12">
	<div className="flex items-start gap-80">
	<section>
	<h2 className="text-blue-900 text-4xl font-semibold font-mono leading-loose">
            Schoolhouse tutoring experience
        </h2>
	<p className="text-justify text-blue-800 text-3xl font-normal font-mono leading-loose">
            As a volunteer tutor at Schoolhouse.world, I hosted online SAT mathematics sessions for students, helping learners develop stronger problem-solving skills while improving my own communication and teaching abilities.
        </p>
	</section>
	<section>
         <iframe
          src="/pdfs/Teach.pdf"
          className="
            w-[650px]
            h-[400px]
            rounded-lg
            border
          "
         />
	 <section className="h-[3vh]" />
	 <img
	  src="/images/teach.jpg"
          className="
            w-[650px]
            h-[420px]
            rounded-lg
            border
	  "
	 />
	</section>
	</div>
      </section>


    </main>
  );
}