import LandingHero from "@/components/landing-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [banglishText, setBanglishText] = useState("");
  const [banglaText, setBanglaText] = useState("");

  useEffect(() => {
    const banglish = "ami banglay gan gai ami banglar gan gai\nami amar amike chirodin Ei banglay khuje pai";
    const bangla = "আমি বাংলায় গান গাই আমি বাংলার গান গাই\nআমি আমার আমিকে চিরদিন এই বাংলায় খুঁজে পাই";
    let index = 0;

    const interval = setInterval(() => {
      setBanglishText(banglish.slice(0, index) + "|");
      setBanglaText(bangla.slice(0, index));
      index++;
      if (index > banglish.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <LandingHero />
      <section className="flex justify-center items-center my-10">
        <div className="border border-blue-800 rounded-lg p-4 shadow-lg shadow-blue-800 text-black w-1/3 mx-2">
          <h3 className="text-xl text-slate-200 text-center mb-2">Input</h3>
          <pre className="text-blue-200 text-lg whitespace-pre-wrap">{banglishText}</pre>
        </div>
        <p className="text-4xl mx-2">&gt;</p>
        <div className="border border-blue-800 rounded-lg p-4 shadow-lg shadow-blue-800 text-black w-1/3 mx-2">
          <h3 className="text-xl text-slate-200 text-center mb-2">Output</h3>
          <pre className="text-blue-200 text-lg whitespace-pre-wrap">{banglaText}</pre>
        </div>
      </section>
      <section className="text-center">
        <button className="bg-purple-600 h-16 w-2/12 shadow-md shadow-slate-900 my-10 hover:bg-blue-900 text-slate-100 py-2 px-4 rounded-full">
          Get Started For Free
        </button>
      </section>
      {/*banner*/}
      <section>
        <img src="/banner.jpg" alt="Banner" className="w-3/4 mx-auto my-10 rounded-3xl shadow-2xl shadow-blue-900 outline outline-blue-500" />
      </section>
      <h2 className="text-center text-3xl font-bold mt-32">Features</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-10">
        <div className="bg-slate-800 p-4 rounded-lg text-white text-center shadow-lg shadow-blue-900">
          <h3 className="text-2xl font-bold">Easy to Use</h3>
          <p className="mt-4">Our platform is designed with simplicity in mind. Just input your Banglish text, and get an accurate বাংলা translation instantly.</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-white text-center shadow-lg shadow-blue-900">
          <h3 className="text-2xl font-bold">High Accuracy</h3>
          <p className="mt-4">We use advanced algorithms to ensure that your translations are as accurate as possible, preserving the meaning and context of your original text.</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-white text-center shadow-lg shadow-blue-900">
          <h3 className="text-2xl font-bold">Free and Accessible</h3>
          <p className="mt-4">Our service is completely free to use and accessible from any device, whether you're on a desktop, tablet, or mobile phone.</p>
        </div>
      </section>
      {/*accordion*/}
      <section className="my-32 w-2/4 mx-auto">
        <h2 className="text-center text-3xl font-bold">FAQ</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does it work?</AccordionTrigger>
            <AccordionContent>
              You simply input your Banglish text, and it translates it to বাংলা.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it free to use?</AccordionTrigger>
            <AccordionContent>
              Yes, it is completely free to use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I use it on mobile?</AccordionTrigger>
            <AccordionContent>
              Yes, it is fully responsive and works on all devices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}