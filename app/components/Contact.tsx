const Contact = () => {
  return (
    <section className="bg-[#0067b8] text-white py-50 px-6 min-h-screen  font-manrope">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
          <div className="h-1 w-12 bg-white mb-6"></div>
          <p className="mb-4 text-lg">For general enquiries</p>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Address :</p>
              <p>110, 16th Road, Chembur, Mumbai - 400071</p>
            </div>
            <div>
              <p className="font-semibold">Phone :</p>
              <p>+91 22 25208822</p>
            </div>
            <div>
              <p className="font-semibold">Email :</p>
              <p>info@supremegroup.co.in</p>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full name"
            className="w-full bg-transparent border-b border-gray-300 focus:outline-none text-white placeholder:text-white mb-8"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full bg-transparent border-b border-gray-300 focus:outline-none text-white placeholder:text-white  mb-8"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent border-b border-gray-300 focus:outline-none text-white placeholder:text-white  mb-8"
          />
          <textarea
            placeholder="Message"
            rows={1}
            className="w-full bg-transparent border-b border-gray-300 focus:outline-none text-white placeholder:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold mt-4"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
