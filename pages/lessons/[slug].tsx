import React from 'react';
import Head from 'next/head';
import ReactPlayer from "react-player";

import { getLessonBySlug, getAllLessons } from '../../lib/lessons';

import Layout from '../../components/Layout';

const Post = ({ frontmatter, htmlString }) => {
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div className="my-container mt-4">
        <div>
          <h3 className="font-medium text-gray-500 text-lg pb-4">{ frontmatter.date }</h3>
          <h1 className="font-bold text-5xl md:text-6xl mb-6">{ frontmatter.emoji } { frontmatter.title }</h1>
          <ReactPlayer url={frontmatter.youtubeUrl} controls={true} pip={true} style={{ maxWidth: "100%" }} />
        </div>
        <hr className="mt-8 border-2 border-gray-300" />
        <article
          className="prose md:prose-xl w-full pt-8"
          dangerouslySetInnerHTML={{ __html: htmlString }}
        ></article>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const lessons = getAllLessons();

  return {
    paths: lessons.map((lesson) => ({
      params: {
        slug: lesson.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { body, frontmatter } = await getLessonBySlug(slug);

  return {
    props: {
      frontmatter,
      htmlString: body.html,
    },
  };
};

export default Post;
