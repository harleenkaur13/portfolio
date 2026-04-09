import { useState } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "48cd6e1f-502e-4123-be7d-d788bb564cd5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success! Message sent." : "Error sending message");
    
    if (data.success) {
      event.target.reset();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 md:gap-10">
      {/* Heading */}
      <div className="pt-35 h-20 flex justify-center items-end mb-6 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-white">Contact Me</h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-center gap-10 w-full max-w-4xl">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-2xl text-zinc-300 font-medium mb-4">
            Let's Connect
          </h2>
          <p className="text-zinc-400 mb-6">
            I'm always excited to collaborate on interesting projects or just
            have a tech chat! Feel free to reach out on any platform below.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-zinc-400">
            <a
              href="mailto:sainiharleenkaur123@gmail.com"
              className="hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Mail size={26} />
            </a>
            <a
              href="https://github.com/harleenkaur13"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Github size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/harleenkaur857/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="https://instagram.com/yourinstagram"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-105 transition-all duration-300"
            >
              <Instagram size={26} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-white/8 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="p-3 rounded-md bg-transparent border border-zinc-700 placeholder:text-zinc-500 focus:border-zinc-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="p-3 rounded-md bg-transparent border border-zinc-700 placeholder:text-zinc-500 focus:border-zinc-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              required
              className="p-3 rounded-md bg-transparent border border-zinc-700 placeholder:text-zinc-500 focus:border-zinc-500 outline-none"
            />
            <button
              type="submit"
              className="bg-zinc-800 text-zinc-400 hover:text-zinc-300 transition duration-300 hover:cursor-pointer hover:scale-102 px-6 py-2 rounded-md font-medium"
            >
              Send Message
            </button>
            {result && (
              <p className={`text-center font-medium ${result.includes("Success") ? "text-green-400" : "text-red-400"}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
