import React from 'react';
import Layout from '../../components/Layout';
import LessonsList from '../../components/LessonsList';

import { getAllLessons } from '../../lib/lessons';

export default function LessonIndexPage({ lessons }) {
  return (
    <Layout>
      <div className="my-container text-center">
        <h1 className="text-4xl font-bold">Lessons</h1>
        <LessonsList lessons={lessons} />
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
