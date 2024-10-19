import React from 'react'
import { MdArrowRight } from 'react-icons/md'

const Faq = () => {
  return (
    <>
<section className=' dark:bg-darkbg dark:text-white pb-10' data-aos-duration="1000" data-aos="fade-up">

<div class="flex items-center justify-center flex-col gap-y-2 py-5">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Frequently asked questions</h2>
      <p class="text-lg font-medium text-slate-700/ dark:text-slate-100">Most asked questions by patient</p>
    </div>
        <ul class="mx-4 md:max-w-3xl lg:max-w-6xl md:mx-auto divide-y  shadow shadow-blue-200 rounded-xl">
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                
                <MdArrowRight  size={34} class=" text-gray-500 dark:text-gray-200 transition group-open:rotate-90" />
                <span>What services does Pulse Hospital offer?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                Pulse Hospital provides comprehensive medical care, including general medicine, diabetes management, critical care, and pediatric services.   </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
            <MdArrowRight  size={34} class=" text-gray-500 dark:text-gray-200 transition group-open:rotate-90" />
                <span>How can I book an appointment?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                You can book an appointment by calling our reception desk or using our online appointment system on the website. </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
            <MdArrowRight  size={34} class=" text-gray-500 dark:text-gray-200 transition group-open:rotate-90" />
                <span>What are the hospital's visiting hours?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                Visiting hours are from 10:00 AM to 12:00 PM and 4:00 PM to 6:00 PM. Please contact the hospital for updates or changes. </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
            <MdArrowRight  size={34} class=" text-gray-500 dark:text-gray-200 transition group-open:rotate-90" />
                <span>Is there emergency care available?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                Yes, Pulse Hospital has a 24/7 emergency department. For emergencies, please call our emergency contact number immediately. </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
            <MdArrowRight  size={34} class=" text-gray-500 dark:text-gray-200 transition group-open:rotate-90" />
                <span>What conditions does a Consultant Physician specializing in Diabetes treat?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                They treat diabetes, pre-diabetes, and other metabolic disorders. They also provide care for complications like neuropathy, retinopathy, and cardiovascular issues related to diabetes. </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
            <MdArrowRight  size={34} class=" text-gray-500 dark:text-gray-200 transition group-open:rotate-90" />
                <span>Can the hospital help with diabetes-related complications?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                Yes, we provide comprehensive management of diabetes and its complications, including kidney issues, nerve damage, and heart conditions. </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
            <MdArrowRight  size={34} class=" text-gray-500 dark:text-gray-200 transition group-open:rotate-90" />
                <span>What critical care services are available?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                Our critical care unit handles patients with severe medical conditions requiring close monitoring, including heart attacks, respiratory distress, and multi-organ failure. </p>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
            <MdArrowRight  size={34} class="text-gray-500 dark:text-gray-200 transition group-open:rotate-90" />
                <span>How can I get information about the cost of treatments?</span>
            </summary>

            <article class="px-4 pb-4">
                <p>
                You can inquire about treatment costs by contacting our billing office directly. We can also provide an estimated cost for common procedures and consultations. </p>
            </article>
        </details>
    </li>
  

</ul>
</section>

    </>
  )
}

export default Faq