import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { MutableRefObject, useRef, useState } from 'react';

function Contact() {
  const form = useRef<HTMLFormElement>() as MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_1y2ptv9',
      'template_zra5k9q',
      form.current,
      'arBUKtdaXbgkzqZx8'
    );

    setNameInput('');
    setPhoneNumberInput('');
    setEmailInput('');
    setSubjectInput('');
    setMessageInput('');
    setIsMessageSent(true);

    setTimeout(() => {
      setIsMessageSent(false);
    }, 5000);
  };

  // input form values control
  const [nameInput, setNameInput] = useState('');
  const [phnoneNumberInput, setPhoneNumberInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subjectInput, setSubjectInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  // Success message control
  const [isMessageSent, setIsMessageSent] = useState(false);

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl text-[#5651e5] uppercase tracking-widest">
          Contact
        </p>
        <h2 className="py-4">Get In Touch!</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://econo-courier.com/wp-content/uploads/2016/12/Girl-hands-typing-on-laptop-on-wooden-table-at-night-520886540_4500x3000.jpeg"
                  alt="/"
                />
              </div>

              <div>
                <h2 className="py-2">Aaron Borgi</h2>
                <p>Front-end Developer</p>
                <p className="py-4">
                  I am available for freelance or full/part-time positions.
                  Contact me and let's talk. :)
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
                    <a href="https://www.linkedin.com/in/aaron-borgi-5744a7236/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
                    <a href="https://github.com/aaron47">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrtXFzzkBwZpcvXmLRswxRjJCkKDpBvTVfGqxnJjGrCzwJTHSwtJwjdFkVxhRsspsdPVV">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="p-6 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
                    <Link href="#skills">
                      <BsFillPersonLinesFill />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="upper text-sm py-2">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="upper text-sm py-2 ">Phone Number</label>
                    <input
                      name="phone_number"
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      value={phnoneNumberInput}
                      onChange={(e) => setPhoneNumberInput(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="upper text-sm py-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="upper text-sm py-2">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    value={subjectInput}
                    onChange={(e) => setSubjectInput(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="upper text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    rows={10}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="w-full p-4 text-gray-100 mt-4">
                  Submit Message
                </button>

                {isMessageSent && (
                  <p className="italic text-green-500 text-2xl mt-5">
                    Your email has been sent successfully.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="p-4 rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                size={30}
                className="m-auto text-[#5651e5]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
