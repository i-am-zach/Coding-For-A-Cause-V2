import React from 'react';
import Layout from '../components/Layout';
import Head from "next/head";

import { getAllMembers } from '../lib/members';
export default function AboutUs({ members }) {
  return (
    <Layout>
      <Head>
        <title>Coding for a Cause - About Us</title>
        <meta name="description" contnet="About the Coding for a Cause team"></meta>
      </Head>
      <div className="my-container">
        <h1 className="text-4xl font-bold text-center pb-8">Our Team</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {members.map((member) => {
            return (
              <div
                key={member.full_name}
                className="border-2 border-gray-300 rounded-md tracking-wide shadow-lg p-4"
              >
                <div className="flex items-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                    <img
                      src={member.profile_picture}
                      alt={member.full_name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-2xl font-semibold">
                      {member.full_name}
                    </h4>
                    <h5 className="text-blue-500 font-medium text-lg">
                      {member.title ? `${member.title} |` : null} {member.class}
                    </h5>
                  </div>
                </div>
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: member.htmlString }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (params) => {
  const members = getAllMembers();
  return {
    props: {
      members: members.map((member) => ({
        ...member.frontmatter,
        htmlString: member.body.html,
      })),
    },
  };
};
