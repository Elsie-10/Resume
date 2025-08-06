'use client';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5c70dcaf-239d-4081-ac16-64be2c490e77");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  }

  return (
       <section className="min-h-screen  text-white p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Panel */}
        <div>
          <h2 className="text-4xl font-bold mb-4">CONTACT</h2>
          <p className="text-gray-300 mb-6">
            Do you want to know more about me , the following is my contact information. I will be pleased to hear from you.
          </p>

          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-white">Address</h4>
              <p>Thika Town, Kiambu</p>
              <p>2870-01000</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Phone</h4>
              <p>+254 717 300 525</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Email</h4>
              <p>elsieoscar06@gmail.com</p>
            </div>
          </div>

          {/* Social icons (you can link them) */}
          {/* <div className="flex gap-4 mt-6">
            <a href="#"><i className="fab fa-linkedin text-white hover:text-blue-400"></i></a>
            <a href="#"><i className="fab fa-instagram text-white hover:text-pink-400"></i></a>
            <a href="#"><i className="fab fa-facebook text-white hover:text-blue-600"></i></a>
            <a href="#"><i className="fab fa-twitter text-white hover:text-blue-400"></i></a>
            <a href="#"><i className="fab fa-youtube text-white hover:text-red-500"></i></a>
          </div> */}
        </div>

        {/* Right Panel (Form) */}
        <div className="bg-[#101343] p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">GET IN TOUCH</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone number</label>
              <input
                type="text"
                name="phone"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="3"
                required
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 text-white resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 mt-2 rounded shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
