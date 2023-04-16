import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            subject,
            message
        }

        fetch('/api/v1/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    toast.success(data.message, {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                } else {
                    toast.error(data.message)
                }
            })
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }

    return (
        <>
            <section>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact with Me</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Have a question on your mind? Will you offer a job? Or do you just want to have a chat? Don't stop, write down what's on your mind.</p>
                    <div className="space-y-8">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" onChange={onChangeEmail} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-back dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="yourname@domain.com" required>
                            </input>
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                            <input type="text" onChange={onChangeSubject} id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-back dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="I just talk with you" required>
                            </input>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-mediu text-white">Your message</label>
                            <textarea id="message" onChange={onChangeMessage} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-back dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-indigo/70 hover:bg-indigo/60 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </div>
                </div>
            </section>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )

}