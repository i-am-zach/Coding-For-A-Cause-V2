import Head from 'next/head';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Coding for a Cause</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-blue-300 py-32">
        <div className="container mx-auto px-8">
          <div className="block md:flex gap-4">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-6xl text-gray-900 font-bold">
                Providing your business with professionally designed websites,
                for free.
              </h1>
              <button className="btn bg-white text-gray-900 mt-8 lg:text-xl">
                <Link href="/contact"><a>Contact Us</a></Link>
              </button>
            </div>
            <div className="mt-12 md:mt-0 flex-1 max-w-xl">
              <img src="/your_company_here.png" alt="Laptop" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-8 px-6 md:px-0">
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold" id="#about-us">Who We Are</h1>
            <p className="pt-4 text-xl text-gray-700">
              Coding for a Cause was started to develop students' skills and
              teach the marketable technology in the world of Computer Science
              with a goal of being able to give back to our communities. We
              start by teaching our members the basics - HTML, CSS, and
              JavaScript - and move onto more advanced topics like web
              frameworks, HTTP protocols, and modern web paradigms.
            </p>
          </div>
          {/* CARDS SECTION */}
          <div className="pt-16 grid md:grid-cols-2 gap-x-4 gap-y-8">
            <Card
              title="Giving Back"
              subtitle="We work with local businesses and not-for-profits to help build them intuitively designed and responsive websites for free. Turning a business idea into a reality can be expensive, we want to help reduce the staggering costs of website fees."
            />
            <Card
              title="Student Run"
              subtitle="Our club is lead by High School students and taught for High School students. The club is a great opportunity for students who know a lot to pass on their skills and for apsiring developers to get free educational content."
            />
            <Card
              title="Team Environment"
              subtitle="We like to teach our lessons with a focus on teaching the appropraite technology for an upcoming project. Working in a team on a coding project nurtures good team and project management skills that are useful for any industry."
            />
            <Card
              title="Teaching the Modern Web"
              subtitle="We teach our students modern and highly utilized web frameworks. Our prefered stack is MongoDB, Express, Vue, and Node.js but we've also touched on topics like React, Django, and Flask."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
