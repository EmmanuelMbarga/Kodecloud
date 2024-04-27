export default function DescriptionBaraha() {
  return (
    <>
      <section className=" m-auto bg-gradient-to-t items-center from-sky-500 to-teal-400 p-10 rounded-2xl mt-14 mb-8">
        <div className="flex Portable:block ">
          <img
            src="https://assets-global.website-files.com/62a8969da1ab56329dc8c41e/64173c664e0fbd0ef8a9e5b9_SIDDHARTH.png"
            className="max-w-[300px] max-h-[140px]"
            alt="barahalikar"
          />
          <div className="">
            <h2 className="text-2xl font-bold text-white">
              About the instructor
            </h2>
            <p className="mt-8 text-gray-300">
              Barahalikar Siddharth is not just a technologist but also an
              educator and innovator, committed to advancing technology through
              both professional practice and teaching.
            </p>
          </div>
        </div>
        <div className="text-gray-300">
          <p>
            With over 8 years of experience in DevSecOps, MuleSoft, Kubernetes,
            Apigee, Istio, and GCP, he is a Technical Architect known for his
            innovative approach to technology solutions. His expertise spans API
            development and management, utilizing platforms like Google Apigee,
            Mulesoft, and Kubernetes.
          </p>
          <br />
          <p>
            As an instructor, Siddharth shares his deep knowledge in Kubernetes,
            and DevSecOps, providing practical and comprehensive learning
            experiences. His academic contributions include papers on extending
            microservices using Istio Service Mesh and the management of
            microservices with DevOps tools.
          </p>
          <br />
          <p>
            {"Siddharth's"} career began at HCL Technologies, evolving from a
            Software Developer to a Technical Architect.His accolades include
            multiple Infinity League recognitions and a CKAD: Certified
            Kubernetes Application Developer certification.
          </p>
        </div>
      </section>
    </>
  );
}
