import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
// 9dYjVD5A3ufE9OlyC
// template_pudmjqb
// service_uvm4tee
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // 9dYjVD5A3ufE9OlyC
// template_pudmjqb
// service_uvm4tee
    emailjs.send(
      'service_uvm4tee',
      'template_pudmjqb',
      {
        from_name: form.name,
        to_name: 'Joyneel',
        from_email: form.email,
        to_email: 'joyneelbose16@gmail.com',
        message: form.message
      },
      '9dYjVD5A3ufE9OlyC'
    )
    .then(() => {
      setLoading(false);
      alert('Thank You, I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      })
    },(error) => {
      setLoading(false)
      console.log(error);
      alert('Something went Wrong')
    })

  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left','tween', 0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
        ref = {formRef}
        onSubmit = {handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
            type="text"
            name = "name"
            onChange={handleChange}
            value={form.name}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
            type="email"
            name = "email"
            onChange={handleChange}
            value={form.email}
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
            rows="7"
            name = "message"
            onChange={handleChange}
            value={form.message}
            placeholder="What do you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
          type="submit"
          className="bg-tertiary py-3 px-8 font-bold shadow-empty shadow-primary
          w-fit outline-none text-white rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}

          </button>
        </form>
      </motion.div>
      <motion.div
      variants={slideIn('right','tween',0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")