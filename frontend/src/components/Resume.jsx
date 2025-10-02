import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p>IIT – BSc Computer Science, 3.2 GPA</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p>Kroger/Mariano’s – Meat Clerk</p>
          <p>CS Teaching Assistant at IIT</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
