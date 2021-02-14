import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

import { getAllLessons } from '../../lib/lessons';

export default function LessonIndexPage({ lessons }) {
  return (
    <Layout>
      <div className="my-container text-center">
        <h1 className="text-4xl font-bold">Lessons</h1>
        <ul className="mt-8">
          {lessons.map((lesson) => (
            <li className="py-2" key={lesson.slug}>
              <Link href={`/lessons/${lesson.slug}`}>
                <a className="text-blue-500 hover:text-blue-400 hover:underline text-xl">
                  {lesson.frontmatter.emoji} {lesson.frontmatter.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps = () => {
  const lessons = getAllLessons();
  return {
    props: {
      lessons,
    },
  };
};
